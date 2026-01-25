export const ENABLE_WORKSHOP = false;

export const pages = [
  { title: 'Overview', link: '/' },
  { title: 'Library', link: '/library' },
  { title: 'About', link: '/about' },
  { title: 'Adopt OCCTIVE', link: '/adopt' },
  ...(ENABLE_WORKSHOP
    ? [{ title: 'Workshop', link: '/workshop' }]
    : []),
];
