import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/main/Container'
import StarRating from '@/components/selfFeatures/StarRating'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'selfFeatures/StarRating',
          name: 'StarRating',
          component: StarRating
        },
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
    }
  ]
})
