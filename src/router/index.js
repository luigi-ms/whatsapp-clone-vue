import { createRouter, createWebHistory } from 'vue-router'
import MessagesView from '../views/MessagesView.vue'
import StatusesView from '../views/StatusesView.vue'
import CallsView from '../views/CallsView.vue'

const routes = [
  {
    path: '/',
    name: 'messages',
    component: MessagesView
  },
  {
    path: '/status',
    name: 'statuses',
    component: StatusesView
  },
  {
    path: '/calls',
    name: 'calls',
    component: CallsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
