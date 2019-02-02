import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/main/Container'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/regist',
          name: 'Regist',
          component: Regist
        }
      ]
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    }
  ]
})
