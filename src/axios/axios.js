import axios from 'axios' //引入axios组件
import router from '../router' //引入vue-router组件
import store from '../store'
import url from './serviceAPI.config' //引入serviceAPI接口

//路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录失败后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
// request拦截器：对请求参数做监听和处理 (发送请求前处理)
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {//请求错误处理
        return Promise.reject(error.response);
    }
);

// 添加response响应拦截器 （返回请求后处理）
axios.interceptors.response.use((response) => {
    // console.log(response.headers.authorization);
    //如果token值发生改变的时候，替换token值
    let token = response.headers.authorization
    if (token) {
        // sessionStorage.setItem("token", response.headers.authorization);
        store.dispatch('refreshToken', token)
    }
    return response;
}, (error) => {
    // 响应头发生错误发生的操作
    // console.log(error.response)
    if (error.response.status) {
        console.log(error.response.status)
        switch (error.response.status) {
            // 在登录成功后返回当前页面，这一步需要在登录页操作。                
            // 401 token过期                
            // 登录过期对用户进行提示                
            // 清除本地token和清空sessionStorage的             
            // // 跳转登录页面                
            case 401:
                // 清除token                    
                // localStorage.removeItem('token');
                // // this.$message.error="token已过期";
                // // store.commit('loginSuccess', null);                    
                // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                // router.replace({
                //     path: '/login',
                //     query: {
                //         redirect: router.currentRoute.fullPath
                //     }
                // });
                // this.$message.error("登入已经过期")
                return store.dispatch('logout')
                break
            // 404请求不存在                /*  */
            case 403:  
                Toast({
                    message: '没有当前操作的权限',
                    duration: 1500,
                    forbidClick: true
                });
                
                // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                setTimeout(() => {
                    router.replace({
                        path: '/',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            case 400:
                // Toast({
                //     message: '参数错误',
                //     duration: 1500,
                //     forbidClick: true
                // });
                // // localStorage.removeItem('token');                    
                // // store.commit('loginSuccess', null);                    
                // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                // setTimeout(() => {
                //     router.replace({
                //         path: '/',
                //         query: {
                //             redirect: router.currentRoute.fullPath
                //         }
                //     });
                // }, 1000);
                return this.$Message.error(error.response.data.error)
                break
            // 其他错误，直接抛出错误提示                
            default:
        }
        return Promise.reject(error.response);
    }
});
export default axios;