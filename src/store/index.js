import Vue from 'vue'
import Vuex from 'vuex'

import funcionarios from './modules/funcionarios'

import { default as state } from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    funcionarios,
  },
})

export default store
