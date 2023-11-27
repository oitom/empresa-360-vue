import { createApp } from 'vue'
import App from './App.vue'

//  inicio rotas
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/vews/Home.vue'
import Login from '@/vews/Login.vue'

const routes =[
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
// fim rotas 

// Add rotas no Vue
const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')
// createApp(App).mount('#app')
