
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import service from './axios/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = service
const store = new Vuex.Store({
  state: {
    arr: []
  },
  getters:{
    arr(state){
     return state.arr
    }
   },
  actions: {
    increment({ commit }, data) {
      commit('increment',data)
    }
  },
  mutations: {
    increment(state,data) {
      state.arr=[];
      state.arr=data;
    }
  },
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
