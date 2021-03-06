import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue-filter/',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/pages/Main')
    }
  ]
})
