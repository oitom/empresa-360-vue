import { createRouter, createWebHistory } from 'vue-router'

// sem lazy loading
// import Contratos from '@/components/vendas/Contratos.vue'

// com lazy loading
const Contratos = () => import('@/components/vendas/Contratos.vue')
const Dashboard = () => import('@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import('@/components/dashboard/DashboardRodape.vue')
const Home = () => import('@/vews/Home.vue')
const Indicadores = () => import('@/components/servicos/Indicadores.vue')
const Leads = () => import('@/components/vendas/Leads.vue')
const Lead = () => import('@/components/vendas/Lead.vue')
const Login = () => import('@/vews/Login.vue')
const Opcoes = () => import('@/components/servicos/Opcoes.vue')
const PaginaNaoEncontrada = () => import('@/vews/PaginaNaoEncontrada.vue')
const Servicos = () => import('@/components/servicos/Servicos.vue')
const Servico = () => import('@/components/servicos/Servico.vue')
const Site = () => import('@/vews/Site.vue')
const Vendas = () => import('@/components/vendas/Vendas.vue')
const VendasPadrao = () => import('@/components/vendas/VendasPadrao.vue')

const routes =[
  {
    path: '/', //localhost
    component: Site,
    meta: { requerAutorizacao: false }
  },
  {
    path: '/home', //localhost/home
    meta: { requerAutorizacao: true },
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
    meta: { requerAutorizacao: false },
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
  scrollBehavior(to, from, savePosition) { // scroll na pagina em secoes
    if(savePosition) { // volta pra posicao anterior ao clicar no back do browser
      return savePosition;
    }

    // verifica se tem um #secao na url
    if(to.hash) {
      return { el: to.hash } // el é o id de um elemento html (#secao1)
    }
    return { left: 0, top: 0 } // left= x; top = y
  },
  routes: routes
})

// metodo executado antes do acesso ao destino
router.beforeEach((to) => {
  // console.log("Rota Destino: ", to.meta); // meta: { requerAutorizacao: true }
  // verificar se o user está autorizado a acessar a rota
  // if(to.meta.requerAutorizacao) {
    // console.log("Valida o acesso")
  // }
  // else { 
    // console.log("Segue sem validar a autorizacao")
  // }
});

// metodo executado após a conclusão da navegação
router.afterEach((to, from)=> {
  // console.log("origem ", from)
  // console.log("destino", to)
});

export default router