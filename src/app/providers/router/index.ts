import '@mts241alikhlash/web-shared/types/router'
import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/features/platform/auth'
import { authSessionService, useAuthStore } from '@/features/platform/auth'
import { dashboardRoutes } from '@/features/platform/dashboard'
import { profileRoutes } from '@/features/platform/profile'
import { inventoryRoutes } from '@/features/inventory/routes'

const HOME = '/dashboard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: HOME,
    },
    ...authRoutes,
    {
      path: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [...dashboardRoutes, ...inventoryRoutes, ...profileRoutes],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/layouts/NotFoundPage.vue'),
      meta: { title: 'Halaman Tidak Ditemukan' },
    },
  ],
})

router.beforeEach((to) => {
  const store = useAuthStore()
  if (!store.user) {
    const user = authSessionService.hydrateUser()
    if (user) {
      store.setUser(user)
    }
  }

  const hasSession = Boolean(store.user)

  if (to.meta.requiresAuth && !hasSession) {
    return { name: 'login' }
  }

  if (to.meta.guestOnly && hasSession) {
    return HOME
  }

  const allowedRoles = to.meta.allowedRoles
  if (allowedRoles && allowedRoles.length > 0) {
    const user = store.user
    if (!user) return { name: 'login' }
    const userRoles = user.roles ?? []
    if (!userRoles.includes('SUPER_ADMIN')) {
      const hasAccess = allowedRoles.some((r: string) => userRoles.includes(r))
      if (!hasAccess) return HOME
    }
  }

  const requiredPermission = to.meta.requiredPermission
  if (requiredPermission) {
    const user = store.user
    if (!user) return { name: 'login' }
    const userRoles = user.roles ?? []
    const userPermissions = user.permissions ?? []
    if (
      !userRoles.includes('SUPER_ADMIN') &&
      !userPermissions.includes(requiredPermission)
    ) {
      return HOME
    }
  }

  return true
})

export default router
