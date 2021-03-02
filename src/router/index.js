import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1In from '../views/Page1/Login'
import Page1Up from '../views/Page1/Signup'
import Page2In from '../views/Page2/Login'
import Page2Up from '../views/Page2/Signup'
import Page3In from '../views/Page3/Login'
import Page3Up from '../views/Page3/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page1In',
    component: Page1In
  },
  {
    path: '/signup',
    name: 'Page1Up',
    component: Page1Up
  },
  {
    path: '/page2in',
    name: 'Page2In',
    component: Page2In
  },
  {
    path: '/page2up',
    name: 'Page2Up',
    component: Page2Up
  },
  {
    path: '/page3in',
    name: 'Page3In',
    component: Page3In
  },
  {
    path: '/page3up',
    name: 'Page3Up',
    component: Page3Up
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router