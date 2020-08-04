import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import About from '../views/About'
import Dictionary from '../views/Dictionary'
import Table from '../views/FormTableInfo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/dictionary',
        name: 'Dictionary',
        component: Dictionary
      },
      {
        path: '/table',
        name: 'Table',
        component: Table
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 多次重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
