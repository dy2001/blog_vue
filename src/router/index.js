import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Home from '../views/Home.vue'
const V = ()=> import('../views/V.vue');//异步加载
const Diary = ()=> import('../views/Diary.vue');//异步加载
Vue.use(ElementUI);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/v',
    name: 'v',
    component: V
  },
  {
    path: '/Diary',
    name: 'Diary',
    component: Diary
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
