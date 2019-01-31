import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER', // 用户信息
  NAVMENU_INDEX: 'NAVMENU_INDEX' // 导航index
}

const state = { // 需要维护的状态
  isAutnenticated: false,  // 是否认证
  user: {},   // 存储用户信息
  navMenu: localStorage.setNavmenuIndex ,
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user,
  navMenu: state => state.navMenu
}

const mutations = {
  [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
    if (isAutnenticated)
      state.isAutnenticated = isAutnenticated
    else
      state.isAutnenticated = false
  },
  [types.SET_USER](state, user) {
    if (user)
      state.user = user
    else
      state.user = {}
  },
  [types.NAVMENU_INDEX](state, navMenu) {
    // console.log(navMenu)
    if (navMenu)
      state.navMenu = navMenu
    else
      state.navMenu = '0'
  }
}

const actions = {
  setIsAutnenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
  },
  setNavmenuIndex: ({ commit }, navMenu) => {
    commit(types.NAVMENU_INDEX, navMenu)
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user)
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_IS_AUTNENTIATED, false)
    commit(types.SET_USER, null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
