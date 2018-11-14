import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Faxian from '@/components/faxian'
import Mine from '@/components/mine'
import $ from 'jquery' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/faxian',
      component: Faxian
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
