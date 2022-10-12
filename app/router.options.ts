// import { createMemoryHistory } from 'vue-router'

export default {
  // history: process.client ? createMemoryHistory : undefined,
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('@/components/Test.vue')
    }
  ],
}