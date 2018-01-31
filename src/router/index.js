import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test from '@/components/test'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/test',
      component: test,
    },
  ]
})

