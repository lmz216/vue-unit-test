import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import history from '@/components/history'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
