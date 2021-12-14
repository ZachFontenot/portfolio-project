import { createRouter, createWebHashHistory } from 'vue-router'

// If I was making this with the intention of using it forever
// I would probably be a little more fastidious about how I am
// organizing these top-level routes and not stuffing everything
// into '/components'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Code from './components/Code.vue'
import Resume from './components/Resume.vue'
import ButtonHell from './components/ButtonHell.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/code', component: Code },
  { path: '/zachresume', component: Resume },
  { path: '/buttons', component: ButtonHell }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
