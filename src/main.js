import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import Prism from 'prismjs'
import axios from './axios/axios'
import URL from './axios/serviceAPI.config.js'
import Live2d from './components/live2d/Live2d'
Vue.use(ElementUI)
Vue.use(Live2d)
//把axios拦截器存入vue的变量$axios引用
Vue.prototype.$axios = axios

Vue.config.productionTip = false
//把API接口管理URL存入vue的Globel变量中
Vue.prototype.GLOBAL = URL
axios.defaults.headers.common['Authorization'] = store.state.token
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
