import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import GLOBAL from '../axios/serviceAPI.config.js'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
       name: window.sessionStorage.getItem('name') || '', //window.sessionStorage.getItem('name') ||
       email: window.sessionStorage.getItem('email') || '', //window.sessionStorage.getItem('email') ||
       avatar: window.sessionStorage.getItem('avatar') || '', //window.sessionStorage.getItem('avatar') ||
       mobile: window.sessionStorage.getItem('mobile') || '', //window.sessionStorage.getItem('mobile') ||
       token: window.sessionStorage.getItem('tolen') || '', //window.sessionStorage.getItem('tolen') ||
       remark: window.sessionStorage.getItem('remark') || '', //window.sessionStorage.getItem('remark') ||
       auth: window.sessionStorage.getItem('auth') || '',
   },
   mutations: {
       // 用户登录成功，存储 token 并设置 header 头
       logined(state, token) {
           state.auth = true
           state.token = token
           localStorage.token = token
           window.sessionStorage.setItem('tolen',token)
       },
       // 用户刷新 token 成功，使用新的 token 替换掉本地的token
       refreshToken(state, token) {
           state.token = token
           localStorage.token = token
           axios.defaults.headers.common['Authorization'] = state.token
       },
       // 登录成功后拉取用户的信息存储到本地
       profile(state, data) {
        console.log(data)
           state.name = data.name
           state.email = data.email
           state.mobile = data.mobile
           state.avatar = data.avatar
           state.remark = data.remark
           window.sessionStorage.setItem('name',data.name)
           window.sessionStorage.setItem('email',data.username)
           window.sessionStorage.setItem('mobile',data.mobile)
           window.sessionStorage.setItem('avatar',data.avatar)
           window.sessionStorage.setItem('remark',data.remark)
           window.sessionStorage.setItem('auth',true)
       },
       // 用户登出，清除本地数据
       logout(state){
           state.name = null
           state.email = null
           state.mobile = null
           state.avatar = null
           state.remark = null
           state.auth = false
           state.token = null

           localStorage.removeItem('token')
       }
   },
   actions: {
        // 登录成功后保存用户信息
       logined({dispatch,commit}, respose) {
           return new Promise(function (resolve, reject) {
               commit('logined', respose.headers.authorization)
               dispatch('profile', respose).then(() => {
                   resolve()
               }).catch(() => {
                   reject()
               })
           })
       },
       // 登录成功后使用 token 拉取用户的信息
       profile({commit}, respose) {
           return new Promise(function (resolve, reject) {
                axios.get(GLOBAL.URL.mainPage[0].userinfo, {
                    params: {
                        email:respose.data.data.user_name
                    }
                })
                .then(respond => {
                   if (respond.status == 200) {
                       commit('profile', respond.data.data)
                       resolve()
                   } else {
                       reject()
                   }
               })
           })
       },
       // 用户登出，清除本地数据并重定向至登录页面
       logout({state,commit}) {
           return new Promise(function (resolve, reject) {
                axios.get(GLOBAL.URL.mainPage[0].loginout, {}).then(respond => {
                    if (respond.status == 200) {
                        commit('logout')
                        window.sessionStorage.clear()
                        resolve(respond)
                    } else {
                        reject()
                    }
                })
           })
       },
       // 将刷新的 token 保存至本地
       refreshToken({commit},token) {
           return new Promise(function (resolve, reject) {
               commit('refreshToken', token)
           })
       },
   }
})