import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Car from '../views/Car.vue'

import Axioslx from '../views/Axioslx.vue'
import Bf from '../views/并发请求.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/car',
    name: 'car',
    component: Car
  },
  {
    path: '/axioslx',
    name: 'axioslx',
    component: Axioslx
  },
  {
    path: '/bf',
    name: 'bf',
    component: Bf
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/axiossz',
    name: 'axiossz',
    component: () => import(/* webpackChunkName: "about" */ '../views/Axios实战.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes
})

export default router
