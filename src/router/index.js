import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/main/Container'
import StarRating from '@/components/selfFeatures/StarRating'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'selfFeatures/StarRating',
          name: 'StarRating',
          component: StarRating,
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        }
      ]
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
})
export default router;
