const BASEURL  = 'http://www.laravel-admin.com/' //基本地址
const URL ={
    mainPage:[{
        register:BASEURL+'api/user/register',//注册地址
        is_exist:BASEURL+'api/user/is_exist',//账号是否存在
        code: BASEURL + 'api/user/code',//发送邮箱验证码
        login: BASEURL + 'api/user/login',//登陆地址
    }]

}
//外溢到其他组件
export default{
    URL
}
