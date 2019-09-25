import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/main/Container'
import Index from '@/components/main/index'
// import StarRating from '@/components/selfFeatures/StarRating'
// import Cart from '@/components/cartFeatures/cart'
// import flyToCart from '@/components/cartFeatures/flyToCart'
// import getOff from '@/components/cartFeatures/getOff'
// import BootstrapValidator from '@/components/bootstrapValidator/bootstrapValidator'
// import BootstrapValidator_css from '@/components/bootstrapValidator/css'
// import BootstrapValidator_js from '@/components/bootstrapValidator/js'
// import getCategory from '@/components/category/getCategory'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'Container',
      component: Container,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
          path: 'selfFeatures/StarRating',
          name: 'StarRating',
          component: () => import('@/components/selfFeatures/StarRating'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'cartFeatures/cart',
          name: 'Cart',
          component: () => import('@/components/cartFeatures/cart'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'cartFeatures/flyToCart',
          name: 'flyToCart',
          component: () => import('@/components/cartFeatures/flyToCart'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'cartFeatures/getOff',
          name: 'getOff',
          component: () => import('@/components/cartFeatures/getOff'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'BootstrapValidator/BootstrapValidator',
          name: 'BootstrapValidator',
          component: () => import('@/components/bootstrapValidator/bootstrapValidator'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'BootstrapValidator/css',
          name: 'BootstrapValidator_css',
          component: () => import('@/components/bootstrapValidator/css'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'BootstrapValidator/js',
          name: 'BootstrapValidator_js',
          component: () => import('@/components/bootstrapValidator/js'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'category/getCategory',
          name: 'getCategory',
          component: () => import('@/components/category/getCategory'),
          meta: {
            requireAuth: true  //  在需要登录权限的页面添加该字段
          }
        },
        {
          path: 'structuredData/json_ld',
          name: 'json_ld',
          component: () => import('@/components/structuredData/json_ld'),
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
