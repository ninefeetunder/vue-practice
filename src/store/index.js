import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

var store = new Vuex.Store({
  state,
  mutations
})

export default store
