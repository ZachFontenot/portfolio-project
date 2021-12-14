import { createRouter, createWebHashHistory } from 'vue-router'

import About from './components/About.vue'
import Home from './components/Home.vue'
import Code from './components/Code.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/code', component: Code }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
