import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'
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
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
