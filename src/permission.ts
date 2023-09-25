import router from './router'
import { useUserStore } from './stores/user'

router.beforeEach((to) => {
  const store = useUserStore()
  if (to.meta.requireAuth) {
    const token = store.token
    if (!token) {
      router.push({
        path: '/login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
      return false
    }
  }
  return true
})
