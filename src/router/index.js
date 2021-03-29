import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Usuario from '../views/usuario/Usuario.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produto/id:',
    name: 'produto',
    component: Produto,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
