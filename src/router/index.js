import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GanttView',
    component: () => import('../views/GanttView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
