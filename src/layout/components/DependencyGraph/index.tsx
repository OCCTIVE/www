// File: src/layout/components/DependencyGraph/index.tsx
// Renders an accessible modal dialog containing a visual dependency graph.

import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, { Background, ReactFlowProvider } from 'reactflow';
import dagre from '@dagrejs/dagre';
import 'reactflow/dist/style.css';
import { useGraphFromSheet } from '../../../useGraphFromSheet';
import { useData, DataTypes } from '../../../utils/data';

/* ───────── helpers ───────── */

// Removes duplicate nodes by ID
function uniqById(list: any[]) {
  const seen = new Set<string>();
  return list.filter((n) => {
    if (seen.has(n.id)) return false;
    seen.add(n.id);
    return true;
  });
}

// Computes graph layout and assigns topic colors
function layout(
  rawNodes: any[],
  edges: any[],
  groupColorKeys: Record<string, string> | undefined,
  topicColorMap: Record<string, string>,
) {
  const g = new dagre.graphlib.Graph({ multigraph: true });

  g.setGraph({
    rankdir: 'TB',
    ranksep: 100,
    nodesep: 100,
    marginx: 20,
    marginy: 20,
  });

  g.setDefaultEdgeLabel(() => ({}));

  rawNodes.forEach((n) => {
    g.setNode(n.id, { width: 200, height: 80 });
  });

  edges.forEach((e) => g.setEdge(e.source, e.target, {}, e.id));

  dagre.layout(g);

  const positioned = rawNodes.map((n) => {
    const p = g.node(n.id) ?? { x: 0, y: 0 };
    return { ...n, position: { x: p.x, y: p.y } };
  });

  const colourOf = new Map<string, string>();

  positioned.forEach(({ data }) => {
    const { topicKey } = data;
    const unitId = groupColorKeys?.[topicKey];
    if (!topicKey || !unitId || colourOf.has(topicKey)) return;
    colourOf.set(topicKey, topicColorMap[unitId]);
  });

  return { positioned, edges, colourOf };
}

/* ------------------------------------------------------------------ */
/*                              PROPS                                 */
/* ------------------------------------------------------------------ */

export interface DependencyGraphProps {
  flowId?: string;
  highlightId?: string;
  isOpen: boolean;
  onClose: () => void;
  groupLabels?: Record<string, string>;
  groupColorKeys?: Record<string, string>;
  topicColorMap: Record<string, string>;
}

/* ------------------------------------------------------------------ */
/*                          LEGEND COMPONENT                          */
/* ------------------------------------------------------------------ */

// Explains visual encodings used in the graph
interface LegendProps {
  colourOf: Map<string, string>;
  groupLabels?: Record<string, string>;
  collapsed: boolean;
  onToggle: () => void;
}

const Legend: React.FC<LegendProps> = ({
  colourOf,
  groupLabels,
  collapsed,
  onToggle,
}) => {
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 6,
  };

  const chipBase: React.CSSProperties = {
    display: 'inline-block',
    width: 18,
    height: 18,
    borderRadius: 4,
    flexShrink: 0,
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 10,
      }}
    >
      {/* Toggle button controls legend visibility */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={!collapsed}
        aria-controls="dependency-legend-panel"
        style={{
          padding: '5px 12px',
          borderRadius: 999,
          border: '1px solid #e2e8ea',
          background: '#ffffff',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(20,30,35,0.05), 0 6px 16px rgba(20,30,35,0.08)',
        }}
      >
        Color Key {collapsed ? '▸' : '▾'}
      </button>

      {/* Legend panel explaining visual encodings */}
      {!collapsed && (
        <div
          id="dependency-legend-panel"
          role="region"
          aria-labelledby="legend-title"
          style={{
            marginTop: 8,
            background: '#ffffff',
            border: '1px solid #e2e8ea',
            borderRadius: 12,
            padding: '14px 16px',
            fontSize: 14,
            lineHeight: 1.4,
            boxShadow: '0 1px 2px rgba(20,30,35,0.05), 0 6px 16px rgba(20,30,35,0.08)',
            maxWidth: 260,
            maxHeight: 260,
            overflowY: 'auto',
          }}
        >
          {/* Visually hidden heading for screen readers */}
          <h3
            id="legend-title"
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            Dependency graph legend
          </h3>

          {/* ------- Generations ------- */}
          <div style={{ marginBottom: 8, fontWeight: 600 }}>Generations</div>

          <div style={rowStyle}>
            <span
              aria-hidden
              style={{
                ...chipBase,
                border: '3px dotted #111827',
                background: '#ffffff',
              }}
            />
            <span>O.1 Generation</span>
          </div>

          <div style={{ ...rowStyle, marginBottom: 12 }}>
            <span
              aria-hidden
              style={{
                ...chipBase,
                border: '3px solid #111827',
                background: '#ffffff',
              }}
            />
            <span>O.2 Generation</span>
          </div>

          {/* ------- Topic Groups ------- */}
          <div style={{ marginBottom: 8, fontWeight: 600 }}>Topic Groups</div>
          {Array.from(colourOf.entries()).map(([group, color]) => {
            const label = groupLabels?.[group] ?? group; // <-- use mapping if provided
            return (
              <div key={group} style={rowStyle}>
                <span
                  aria-hidden
                  style={{
                    ...chipBase,
                    background: color,
                    border: '2px solid #111827',
                  }}
                />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*                              COMPONENT                             */
/* ------------------------------------------------------------------ */

const DependencyGraph: React.FC<DependencyGraphProps> = ({
  flowId,
  highlightId,
  isOpen,
  onClose,
  groupLabels,
  groupColorKeys,
  topicColorMap,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  /* Close modal and restore focus to the element that opened it */
  const handleClose = useCallback(() => {
    onClose();
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, [onClose]);

  /* Block scroll and mark background inert when modal is open */
  useEffect(() => {
    const mainEl = document.getElementById('main-content');
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');

    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      [mainEl, headerEl, footerEl].forEach((el) => {
        if (el) el.setAttribute('inert', '');
      });
    } else {
      document.body.style.overflow = '';
      [mainEl, headerEl, footerEl].forEach((el) => {
        if (el) el.removeAttribute('inert');
      });
    }
    return () => {
      document.body.style.overflow = '';
      [mainEl, headerEl, footerEl].forEach((el) => {
        if (el) el.removeAttribute('inert');
      });
    };
  }, [isOpen]);

  /* ESC key closes modal */
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose();
    }
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, handleClose]);

  /* Focus trap: keep focus inside dialog while open */
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return () => {};

    const FOCUSABLE = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    /* Move initial focus to the first focusable element (close button) */
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
    );
    if (focusable.length > 0) focusable[0].focus();

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const els = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => !el.closest('[aria-hidden="true"]'));
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', trapFocus);
    return () => window.removeEventListener('keydown', trapFocus);
  }, [isOpen]);

  const { nodes: rawNodes, edges: rawEdges } = useGraphFromSheet();
  const [legendCollapsed, setLegendCollapsed] = useState(true);

  /* Maps a normalised video title to its URL, so graph nodes can link out */
  const [videoUrlByTitle, setVideoUrlByTitle] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    useData(DataTypes.Videos)
      .then((rows: any[]) => {
        const map = new Map<string, string>();
        (rows || []).forEach((row) => {
          const videoTitle = (row.video_title || '').trim().toLowerCase();
          const url = (row.video_url || '').trim();
          if (videoTitle && url && !map.has(videoTitle)) map.set(videoTitle, url);
        });
        setVideoUrlByTitle(map);
      })
      .catch(() => setVideoUrlByTitle(new Map()));
  }, []);
  const nodes = uniqById(rawNodes);
  const nodeIds = new Set(nodes.map((n) => n.id));
  const edges = rawEdges.filter((e) => nodeIds.has(e.source) && nodeIds.has(e.target));
  const { positioned, colourOf } = layout(
    nodes,
    edges,
    groupColorKeys,
    topicColorMap,
  );
  // Map each group (A, B, C...) to a human-friendly topic name
  const topicNames = new Map<string, string>();

  positioned.forEach((n) => {
    const { group } = n.data;
    const name = n.data.topicName || n.data.label; // fallback to label just in case
    if (group && name && !topicNames.has(group)) {
      topicNames.set(group, name);
    }
  });

  /* ------------------------- TARGET HIGHLIGHTING ------------------------- */

  const target = highlightId?.trim().toLowerCase() || '';

  const hasTarget = target !== ''
    && positioned.some(
      (n) => n.id.toLowerCase() === target
        || n.data.label.toLowerCase() === target,
    );

  // Categorize o.1 and o.2 generations into old or new
  const normaliseGeneration = (value: unknown): 'old' | 'new' | 'unknown' => {
    const s = (value ?? '').toString().trim().toLowerCase();
    if (s.startsWith('o.1') || s.startsWith('q.1') || s === '0.1' || s === '1') return 'old';
    if (s.startsWith('o.2') || s.startsWith('q.2') || s === '0.2' || s === '2') return 'new';
    return 'unknown';
  };

  // Dotted vs Solid border for o.1 vs o.2 generations
  const graphNodes = positioned.map((n) => {
    const isTarget = hasTarget
      && (n.id.toLowerCase() === target
        || n.data.label.toLowerCase() === target);

    const genStatus = normaliseGeneration(n.data?.generation);
    const borderStyle = genStatus === 'old' ? 'dashed' : 'solid';
    const borderWidth = 5;
    const borderColor = colourOf.get(n.data.topicKey);

    const hasVideoLink = videoUrlByTitle.has(n.data.label.trim().toLowerCase());

    const base = {
      background: hasTarget ? '#d3d3d3' : '#ffffff',
      borderRadius: 6,
      padding: 12,
      fontSize: 16,
      border: `${borderWidth}px ${borderStyle} ${borderColor}`,
      cursor: hasVideoLink ? 'pointer' : 'default',
    } as React.CSSProperties;

    // Highlight target node with star and purple border
    return isTarget
      ? {
        ...n,
        data: { ...n.data, label: `⭐ ${n.data.label}`, rawLabel: n.data.label },
        style: {
          ...base,
          border: '4px solid #a855f7',
          background: '#ffffff',
        },
      }
      : { ...n, data: { ...n.data, rawLabel: n.data.label }, style: base };
  });

  /* Opens the video linked to the clicked node, if one exists */
  const handleNodeClick = useCallback((_event: React.MouseEvent, node: any) => {
    const rawLabel = (node.data?.rawLabel ?? node.data?.label ?? '').trim().toLowerCase();
    const url = videoUrlByTitle.get(rawLabel);
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }, [videoUrlByTitle]);

  // Unique flow ID for React Flow instance
  const id = React.useMemo(
    () => flowId ?? `flow-${Math.random().toString(36).slice(2)}`,
    [flowId],
  );

  if (!isOpen) return null;

  /* ------------------------------- RENDER ------------------------------- */

  // Use portal to render modal at document body level, bypassing any parent
  // CSS transforms or animations that would break position: fixed
  return ReactDOM.createPortal(
    <>
      {/* Visual overlay blocks background interaction */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(16,26,30,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out',
        }}
      />

      {/* Dialog container for dependency graph */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dep-graph-title"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 1200,
          height: '80%',
          background: '#fff',
          borderRadius: 16,
          padding: 20,
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(20,30,35,0.08), 0 24px 64px rgba(10,20,24,0.35)',
          zIndex: 2001,
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {/* Visually hidden title for screen readers */}
        <h2
          id="dep-graph-title"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Dependency Graph
        </h2>

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close Dependency Graph"
          type="button"
          style={{
            position: 'absolute',
            top: 10,
            right: 14,
            fontSize: 20,
            lineHeight: 1,
            width: 36,
            height: 36,
            borderRadius: 999,
            background: 'rgba(20,30,35,0.05)',
            border: 'none',
            color: '#2b3f45',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease-out',
            zIndex: 4000,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(20,30,35,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(20,30,35,0.05)';
          }}
        >
          ✕
        </button>

        {/* Graph */}
        <ReactFlowProvider>
          <div style={{ position: 'relative', height: '100%' }}>
            <Legend
              colourOf={colourOf}
              groupLabels={groupLabels}
              collapsed={legendCollapsed}
              onToggle={() => setLegendCollapsed((v) => !v)}
            />
            <ReactFlow
              id={id}
              nodes={graphNodes}
              edges={edges}
              onNodeClick={handleNodeClick}
              fitView
            >
              <Background />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </>,
    document.body,
  );
};

export default DependencyGraph;
