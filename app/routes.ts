import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/about.tsx'),
  route('publications', 'routes/publications.tsx'),
] satisfies RouteConfig;
