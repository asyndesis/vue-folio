import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from './views/Portfolio.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Portfolio
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      name: 'folio-item',
      component: Portfolio,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-50378125-1',
  router
})

export default router;
