import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vews/Home.vue'
import Login from '@/vews/Login.vue'
import Site from '@/vews/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Leads from '@/components/vendas/Leads.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

const routes =[
  {
    path: '/',
    component: Site
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'vendas', component: Vendas, children: // /home/vendas
        [
          { path: 'leads', component: Leads }, // /home/vendas/leads
          { path: 'contratos', component: Contratos }, // /home/vendas/contratos
        ] 
      },
      { path: 'servicos', component: Servicos}, // /home/servicos
      { path: 'dashboard', component: Dashboard}, // /home/dashboard
    ]
  },
  {
    path: '/login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router