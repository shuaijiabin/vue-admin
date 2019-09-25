<template>
  <el-container>
    <el-header>
      <el-row class="header_wrap">
        <el-col :xs="6" :sm="4" :md="4" :lg="4">
          <router-link to="/">
            <div class="logo_link"><img src="static/images/logo.png" alt="smile"></div>
          </router-link>
        </el-col>
        <el-col :xs="18" :sm="20" :md="20" :lg="20">
          <ul class="top_link">
            <li class="h-info" @click="warning">
              <span class="el-icon-bell"><i>0</i></span>
            </li>
            <li class="h-info" @click="warning">
              <span class="el-icon-message"><i>0</i></span>
            </li>
            <li v-if="storeData.auth">
              <div class="header_img_wrap">
                <img src="static/images/panda.png" alt="sunday">
              </div>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <strong>{{ storeData.name }}</strong><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-user"><span style="display:inline-block;width:calc(100% - 20px);" @click="warning">{{ storeData.email }}</span></el-dropdown-item>
                  <el-dropdown-item icon="el-icon-setting"><span style="display:inline-block;width:calc(100% - 20px);" @click="warning">设置</span></el-dropdown-item>
                  <el-dropdown-item icon="el-icon-turn-off"><span style="display:inline-block;width:calc(100% - 20px);" @click.prevent="loginOut">登出</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li v-else>
              <router-link to="/Login">登陆</router-link>
            </li>
            <li>
              <router-link to="/Regist">注册</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="unset">
        <div @click.prevent="navSwitch">
          <el-radio-group class="tab_switch" :class="{ close: isCollapse }" v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="!isCollapse"><span></span></el-radio-button>
          </el-radio-group>
        </div>
        <div class="time_container"></div>
        <div class="smile-scroll">
          <div class="over_hide">
            <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span slot="title">建站技术文档</span>
                </template>
                <el-menu-item-group title="网站模块">
                  <el-menu-item index="1-1" disabled>头部结构</el-menu-item>
                  <el-menu-item index="1-2" disabled>底部结构</el-menu-item>
                  <el-menu-item index="1-3" disabled>其他结构</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="建站常用组件">
                  <el-submenu index="1-4">
                    <span slot="title">轮播图组件</span>
                    <el-menu-item index="1-4-1" disabled>owl carousel</el-menu-item>
                    <el-menu-item index="1-4-2" disabled>swiper</el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-5">
                    <span slot="title">放大镜组件</span>
                    <el-menu-item index="1-5-1" disabled>blowup.js</el-menu-item>
                  </el-submenu>
                </el-menu-item-group>

                <el-menu-item-group title="计算数量和价格">
                  <el-submenu index="1-6">
                    <span slot="title">购物车功能</span>
                    <router-link to="/cartFeatures/cart">
                      <el-menu-item index="1-6-1">购物车增删改查</el-menu-item>
                    </router-link>
                    <router-link to="/cartFeatures/flyToCart">
                      <el-menu-item index="1-6-2">飞入购物车特效</el-menu-item>
                    </router-link>
                    <router-link to="/cartFeatures/getOff">
                      <el-menu-item index="1-6-3">购物车折扣</el-menu-item>
                    </router-link>
                  </el-submenu>
                </el-menu-item-group>
                
                <el-menu-item-group title="表单验证">
                  <el-submenu index="1-7">
                    <span slot="title">bootstrapValidator</span>
                    <router-link to="/bootstrapValidator/bootstrapValidator">
                      <el-menu-item index="1-7-1">HTML</el-menu-item>
                    </router-link>
                    <router-link to="/bootstrapValidator/css">
                      <el-menu-item index="1-7-2">CSS</el-menu-item>
                    </router-link>
                    <router-link to="/bootstrapValidator/js">
                      <el-menu-item index="1-7-3">JS</el-menu-item>
                    </router-link>
                  </el-submenu>
                </el-menu-item-group>

                <el-menu-item-group title="get_category.class.php的详情">
                  <router-link to="/category/getCategory">
                    <el-menu-item index="1-8">category</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                <el-menu-item-group title="数据结构化">
                  <router-link to="/structuredData/json_ld">
                    <el-menu-item index="1-9">JSON-LD</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                <el-menu-item-group title="伪静态">
                  <el-submenu index="1-10">
                    <span slot="title">.htaccess</span>
                    <router-link to="/">
                      <el-menu-item index="1-10-1" disabled>重定向</el-menu-item>
                    </router-link>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span slot="title">自定义组件</span>
                </template>
                <el-menu-item-group title="原生js开发组件">
                  <router-link to="/selfFeatures/StarRating">
                    <el-menu-item index="2-1">星级评价</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">持续更新中</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="time_container"></div>
      </el-aside>
      <el-main><transition name="slide-fade"><router-view></router-view></transition></el-main>
    </el-container>
    <Live2d></Live2d>
  </el-container>
</template>

<script>
import Live2d from '@/components/live2d/Live2d'
export default {
  name: 'Container',
  data () {
    return {
      isCollapse: false,
    }
  },
  components: {
    Live2d
  },
  computed: {
    storeData () {
      return this.$store.state
    }
  },
  methods: {
    navSwitch: function () {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    },
    loginOut: function () {
      var _this = this
      this.$store.dispatch('logout').then(res => {
          _this.$router.push('/login')
      })
    },
    warning() {
        this.$message({
          message: '抱歉，此功能还没开发，玩会血小板吧。',
          type: 'warning'
        });
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
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
    z-index:999;
  }
  .el-aside:hover .tab_switch{
    right:-60px;
  }
  .smile-scroll {
    height:calc(100% - 120px);
    overflow-y:scroll;
    overflow-x:hidden;
  }
  .smile-scroll::-webkit-scrollbar {
    width:0;
  }
  .smile-scroll:hover::-webkit-scrollbar {
    width:6px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
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
  .top_link>li.h-info i{
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
    width:100%;
    height:100%;
    border-radius:50%;
    float:left;
  }
  .top_link>li:last-child strong{
    display:block;
    float:left;
    margin-left:4px;
    font-weight:normal;
  }
  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled){
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  .el-dropdown{
    float: left;
    cursor: pointer;
  }
  .header_img_wrap{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    vertical-align: top;
    background: url(../../../static/images/k1.png) no-repeat;
    background-size: contain;
  }
</style>
