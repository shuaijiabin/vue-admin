const BASEURL  = 'http://admin.panda-jiabin.cn/' //基本地址
const URL ={
    mainPage:[{
        register:BASEURL+'api/user/register',//注册地址
        is_exist:BASEURL+'api/user/is_exist',//账号是否存在
        code: BASEURL + 'api/user/code',//发送邮箱验证码
        login: BASEURL + 'api/user/login',//登陆地址
        userinfo: BASEURL + 'api/user/userinfo',//用户信息
        loginout: BASEURL + 'api/user/loginout',//退出登录
    }]

}
//外溢到其他组件
export default{
    URL
}
