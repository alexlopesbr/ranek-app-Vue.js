import { createStore } from 'vuex'
import { api } from '@/services.js'

export default createStore({
  state: {
    usuario: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload
    },

    UPDATE_USUARIO(state, payload){
      state.usuario = payload
    }
  },
  
  actions: {
    getUsuario(context, payload){
      api.get(`/usuario/${payload}`).then(r =>{
        context.commit('UPDATE_USUARIO', r.data)
        context.commit('UPDATE_LOGIN', true)
      })
    }
  },
  modules: {
  }
})
