export const SERVICE_PREFIXES = {
  identity: [
    '/auth',
    '/profiles',
    '/school-unit-types',
    '/religions',
    '/blood-types',
  ],

  inventory: [
    '/inventory',
  ],
} as const

export const UNROUTED_PREFIXES: readonly string[] = ['/dashboard', '/settings']

export const HEALTH_ROUTES = [
  { path: '/health/identity', service: 'identity' },
  { path: '/health/inventory', service: 'inventory' },
] as const
