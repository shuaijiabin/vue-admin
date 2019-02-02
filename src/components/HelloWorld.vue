<template>
  <el-container>
    <el-header>
      <el-row class="header_wrap">
        <el-col :xs="6" :sm="4" :md="4" :lg="4">
          <a class="logo_link" href="javascript:;"><img src="static/images/logo.png" alt="smile"></a>
        </el-col>
        <el-col :xs="18" :sm="20" :md="20" :lg="20">
          <ul class="top_link">
            <li>
              <span class="el-icon-bell"><i>1</i></span>
            </li>
            <li>
              <span class="el-icon-message"><i>2</i></span>
            </li>
            <li style="display:none;">
              <router-link to="/Login">登陆</router-link>
              <router-link to="/Regist">注册</router-link>
            </li>
            <li>
              <img src="static/images/title.jpg" alt="sunday">
              <strong>sunday <span class="el-icon-caret-bottom"></span></strong>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="unset">
        <el-radio-group class="tab_switch" :class="{ close: isCollapse }" v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="!isCollapse"><span></span></el-radio-button>
        </el-radio-group>
        <div class="time_container"></div>
        <div class="over_hide">
          <div class="smile-scroll" @click="reRcroll">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span slot="title">建站技术文档</span>
                </template>
                <el-menu-item-group title="网站模块">
                  <el-menu-item index="1-1">头部结构</el-menu-item>
                  <el-menu-item index="1-2">底部结构</el-menu-item>
                  <el-menu-item index="1-3">其他结构</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="建站常用组件">
                  <el-submenu index="1-4" title="建站常用组件">
                    <span slot="title">轮播图组件</span>
                    <el-menu-item index="1-4-1">owl carousel</el-menu-item>
                    <el-menu-item index="1-4-2">swiper</el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-5">
                    <span slot="title">放大镜组件</span>
                    <el-menu-item index="1-5-1">blowup.js</el-menu-item>
                  </el-submenu>
                </el-menu-item-group>
                <el-menu-item-group title="计算数量和价格">
                  <el-menu-item index="1-6">购物车功能</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="表单验证">
                  <el-menu-item index="1-7">BootstrapValidator</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="time_container"></div>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Login from '@/components/Login'
import Regist from '@/components/Regist'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCollapse: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login,
    Regist
  },
  methods: {
    reRcroll: function () {
      window.onload = function () {
        var smileScroll0 = new smileScroll();
        smileScroll0.smile({
          elementId : "smile-scroll",
          viewHeight : "100%",
          viewWidth : "100%",
          scrollType : "all", //horizontal 水平滚动 , vertical 垂直滚动, all 垂直横向都显示;
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    padding:0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
    position:relative;
    overflow:unset;
    transition:all 0.3s ease;
    height:100%;
  }
  .el-aside:hover .tab_switch{
    right:-60px;
  }
  .over_hide {
    height: calc( 100% - 120px );
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    height:100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    background-color:unset;
  }
  .header_wrap{
    height:100%;
  }
  .logo_link{
    display:block;
    width:100%;
    height:60px;
    overflow:hidden;
    padding-left:10px;
  }
  .logo_link>img{
    height:50px;
    margin:5px 0;
  }
  .top_link{
    float:right;
  }
  .top_link>li{
    padding:0 15px;
    text-align:center;
    float:left;
    transition:all 0.3s ease;
  }
  .top_link>li:hover{
    background-color:rgba(0,0,0,0.5);
  }
  .top_link>li>span{
    position:relative;
  }
  .top_link>li i{
    position:absolute;
    top:-7px;
    left:-7px;
    width:14px;
    height:14px;
    line-height:14px;
    text-align:center;
    border-radius:50%;
    background-color:#E25A59;
    color:#fff;
    font-style:normal;
    font-size:12px;
  }
  .top_link>li img{
    width:40px;
    height:40px;
    border-radius:50%;
    float:left;
    margin-top:10px;
  }
  .top_link>li:last-child strong{
    display:block;
    float:left;
    margin-left:4px;
    font-weight:normal;
  }
</style>
