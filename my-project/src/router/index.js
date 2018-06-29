import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Taga from '@/components/Taga'
import Tagb from '@/components/Tagb'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a:id',
      name: 'Taga',
      component: Taga
    },
    {
      path: '/b',
      name: 'Tagb',
      component: Tagb
    }
  ]
})
