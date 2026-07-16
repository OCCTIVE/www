// File: src/assets/icons/UnitIcons.tsx
// Flat, line-based vector icons representing each unit topic, plus a generic
// default icon for units that don't have a dedicated one yet (e.g. a unit
// added later via the spreadsheet). Icons use currentColor so they can be
// tinted to match each unit's topic color, same as the card title.

import React from 'react';

export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

/* Shared SVG attributes so every icon renders as a consistent flat line-icon */
const viewBox = '0 0 24 24';
const strokeWidth = 1.75;

/* Basics of Computational Problem Solving and Programming — ascending steps */
export function StepsIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <rect x="3" y="14" width="4" height="7" />
      <rect x="10" y="9" width="4" height="12" />
      <rect x="17" y="4" width="4" height="17" />
    </svg>
  );
}

/* Setting Context — globe */
export function GlobeIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

/* Naming and Assignment — tag */
export function TagIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d="M3 12 12 3h7a2 2 0 0 1 2 2v7l-9 9a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8Z" />
      <circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Functions — function curve */
export function FunctionIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d="M3 16c2-6 4-6 6 0s4 6 6 0s4-6 6 0" />
    </svg>
  );
}

/* Sequences and Data Frames — grid / table */
export function GridIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="3" y1="16" x2="21" y2="16" />
      <line x1="9" y1="4" x2="9" y2="20" />
      <line x1="15" y1="4" x2="15" y2="20" />
    </svg>
  );
}

/* Troubleshooting — bug */
export function BugIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <circle cx="12" cy="13" r="5" />
      <line x1="12" y1="4" x2="12" y2="8" />
      <line x1="8.5" y1="6" x2="10" y2="8.3" />
      <line x1="15.5" y1="6" x2="14" y2="8.3" />
      <line x1="5" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="19" y2="12" />
      <line x1="6" y1="18" x2="9" y2="15.5" />
      <line x1="18" y1="18" x2="15" y2="15.5" />
    </svg>
  );
}

/* Old Videos — archive box */
export function ArchiveIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="5" y="9" width="14" height="11" rx="1" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  );
}

/* Generic default icon used for units without a dedicated one */
export function DefaultUnitIcon({ className, style }: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={24}
      height={24}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
