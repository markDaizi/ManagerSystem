import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      user:null
    }
  },
  mutations: {
    // 登录
    LOGIN (state,user) {
      state.user = user
    },
    // 登出
    LOGOUT (state) {
      state.user = ''
    }
  },
  actions: {
    login ({commit},user) {
      commit('LOGIN',user)
    },
    // 同样来个logout
    logout (commit) {
     commit('LOGOUT')
    }
  },
  getters:{
    getUser :function (state) {
      if(!state.user){
        state.user = sessionStorage.getItem('user')
      }
      return state.user
    }
  }
})
