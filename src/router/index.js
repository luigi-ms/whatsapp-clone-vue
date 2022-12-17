import { createRouter, createWebHistory } from 'vue-router'
import MessagesView from '../views/MessagesView.vue'
import StatusesView from '../views/StatusesView.vue'
import CallsView from '../views/CallsView.vue'
import MainPages from '../views/MainPages.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/messages',
    component: MainPages,
    children: [
      {
        path: '/messages',
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
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: {}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
