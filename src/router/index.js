import Vue from 'vue'
import Router from 'vue-router'
import manage from './manage/manage.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    ...manage
  ]
})
