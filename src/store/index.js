import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
   // 用户信息，初始值从本地 localStorage 获取
  user: ls.getItem('user')
}

const mutations = {
  UPDATE_USER(state, user) {
    // 改变 user 的值
    state.user = user
    // 将改变后的值存入 localStorage
    ls.setItem('user', user)
  }
}

const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    router.push('/')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
