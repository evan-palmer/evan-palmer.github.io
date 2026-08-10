import type { Config } from '@react-router/dev/config';

export default {
  // GitHub Pages only serves static files, so pre-render as a client-only SPA.
  ssr: false,
} satisfies Config;
