import Vuex from 'vuex'

import careers from './modules/careers.js'
import services from './modules/services.js'
import projects from './modules/projects.js'

const store = () => new Vuex.Store({
  state: {
    isMobile: false,
    noTransition: false,
  },
  mutations: {
    setMobile: (state, data) => {
      state.isMobile = data
    },
    setTransition: (state) => {
      state.noTransition = !state.noTransition
    },
    setPosts: (state, data) => {
      state.posts = data
    }
  },
  actions: {
    checkMobile: ({ commit }, isMobile) => {
      let width = window.innerWidth
      if (width <= 768) {
        commit('setMobile', true)
      } else {
        commit('setMobile', false)
      }
    },
    toggleTransition: ({ commit }) => {
      commit('setTransition')
    }
  },
  getters: {
    isMobile: (state) => {
      return state.isMobile
    },
    noTransition: (state) => {
      return state.noTransition
    }
  },
  modules: {
    careers,
    services,
    projects
  }
})

export default store