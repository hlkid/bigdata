import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/pages/page1'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
