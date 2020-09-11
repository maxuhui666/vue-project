import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import TodoList from '@/views/todo-list/TodoList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'todo-list',
        component: TodoList
      }
    ]
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
