// src/utils/unitIcons.ts
// Maps each known unit_id to a dedicated flat vector icon. Any unit_id not
// in this map (e.g. a new unit added later via the spreadsheet) falls back
// to a generic default icon, so new rows never end up with a missing icon.

import type { ReactElement } from 'react';
import {
  StepsIcon,
  GlobeIcon,
  TagIcon,
  FunctionIcon,
  GridIcon,
  BugIcon,
  ArchiveIcon,
  DefaultUnitIcon,
  IconProps,
} from '../assets/icons/UnitIcons';

export type UnitIconComponent = (props: IconProps) => ReactElement;

/* unit_id -> icon, keyed off the stable ids in public/data/units.csv */
const unitIconMap: Record<string, UnitIconComponent> = {
  'basics-of-computational-problem-solving-and-programming': StepsIcon,
  'setting-context': GlobeIcon,
  'naming-and-assignment': TagIcon,
  functions: FunctionIcon,
  'sequences-and-data-frames': GridIcon,
  troubleshooting: BugIcon,
  'old-videos': ArchiveIcon,
};

/* Returns the dedicated icon for a unit, or a generic default icon for any
   unit that doesn't have one mapped yet. */
export function getUnitIcon(unitId?: string): UnitIconComponent {
  if (!unitId) return DefaultUnitIcon;
  return unitIconMap[unitId.trim()] || DefaultUnitIcon;
}

export { DefaultUnitIcon };
