import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vews/Home.vue'
import Login from '@/vews/Login.vue'
import PaginaNaoEncontrada from '@/vews/PaginaNaoEncontrada.vue'
import Site from '@/vews/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'

const routes =[
  {
    path: '/', //localhost
    component: Site
  },
  {
    path: '/home', //localhost/home
    alias: '/app',
    component: Home,
    children: [
      { path: 'vendas', component: Vendas, children: //localhost/home/vendas
        [
          { path: '', component: VendasPadrao }, //localhost/home/vendas/
          { path: 'leads', component: Leads, name: 'leads'}, //localhost/home/vendas/leads
          { path: 'leads/:id', component: Lead , name: 'lead'}, //localhost/home/vendas/leads/5
          { path: 'contratos', component: Contratos }, //localhost/home/vendas/contratos
        ] 
      },
      { path: 'servicos', component: Servicos, children: 
        [
          { path: ':id',  name: 'servico', 
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores
            }
          } //localhost/home/servicos/1
        ]
      }, //localhost/home/servicos
      { path: 'dashboard', components: 
        { 
          default: Dashboard,
          rodape: DashboardRodape
        }
      }, //localhost/home/dashboard
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:catchAll(.*)*',
    component: PaginaNaoEncontrada
    // redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from) => {
  // metodo executado antes do acesso ao destino
  console.log("Origem", from)
  console.log("Destino", to)
  // verificar se o user está autorizado a acessar a rota
  
})
export default router