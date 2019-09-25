<template>
  <!-- <div id="landlord">
    <div class="boomCont" id="boomCont" ref="box">
      <div class="item-ball" ref="ball"></div>
    </div>
    <header class="messageBox">
      <span class="msg"></span>
      <span class="dot"></span>
    </header>
    <canvas id="live2d" width="340px" height="360px" class="live2d" @mouseover="prompt"></canvas>
  </div> -->
  <div>
    <div class="platelet" style="display: block;">
    <div class="platelet-tips"></div>
    <div style="width: 400px;">
      <canvas id="live2d" width="650" height="600" class="live2d" style="width: 520px;height: 520px;"></canvas>
    </div>
    <div class="platelet-tool">
      <!-- <i class="fa fa-eye eye"></i> -->
      <i class="fa fa-music music"></i>
      <i class="fa fa-comment comment"></i>
      <i class="fa fa-camera camera"></i>
    </div>
  </div>
  <div id="main" class="container"></div>
  </div>
</template>

<script>
  // import * as animate from '../../../static/js/animate'
  import '../../../static/js/live2d'
  import '../../../static/js/message'

  export default {
    name: 'Live2d',
      data() {
        return {
      }
    },
    created() {
      //延迟调用，防止DOM未加载完成
      //路径以index.html为起点
      // setTimeout(function () {
      //   animate.disappear();
      // },1000);
      setTimeout(function () {
        loadlive2d('live2d', "./static/live2d/model/rem/model.json");
      }, 3000);
    },
    mounted() {
      // animate.playAnimate(this.$refs.box,this.$refs.ball,10);
    },
    methods:{
      prompt(){

      }
    }
  }

</script>

<style scoped>
.platelet {
  -webkit-app-region: drag;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  font-size: 0;
  transition: all .3s ease-in-out;
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
}
.platelet:hover {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
@media (max-width: 768px) {
  .platelet {
    display: none;
  }
}
.platelet-tips {
  width: 250px;
  height: 70px;
  top: -5px;
  padding: 5px 10px;
  border: 2px solid rgb(57, 57, 57);
  background-color: #fff;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  position: absolute;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-name: shake;
  animation-timing-function: ease-in-out;
}
.platelet #live2d {
  position: relative;
}
@keyframes shake {
      2% {
        transform: translate(0.5px, -1.5px) rotate(-0.5deg);
      }
      4% {
        transform: translate(0.5px, 1.5px) rotate(1.5deg);
      }
      6% {
        transform: translate(1.5px, 1.5px) rotate(1.5deg);
      }
      8% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
      }
      10% {
        transform: translate(0.5px, 2.5px) rotate(0.5deg);
      }
      12% {
        transform: translate(1.5px, 1.5px) rotate(0.5deg);
      }
      14% {
        transform: translate(0.5px, 0.5px) rotate(0.5deg);
      }
      16% {
        transform: translate(-1.5px, -0.5px) rotate(1.5deg);
      }
      18% {
        transform: translate(0.5px, 0.5px) rotate(1.5deg);
      }
      20% {
        transform: translate(2.5px, 2.5px) rotate(1.5deg);
      }
      22% {
        transform: translate(0.5px, -1.5px) rotate(1.5deg);
      }
      24% {
        transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
      }
      26% {
        transform: translate(1.5px, 0.5px) rotate(1.5deg);
      }
      28% {
        transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
      }
      30% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
      }
      32% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
      }
      34% {
        transform: translate(2.5px, 2.5px) rotate(-0.5deg);
      }
      36% {
        transform: translate(0.5px, -1.5px) rotate(0.5deg);
      }
      38% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
      }
      40% {
        transform: translate(-0.5px, 2.5px) rotate(0.5deg);
      }
      42% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
      }
      44% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
      }
      46% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
      }
      48% {
        transform: translate(2.5px, -0.5px) rotate(0.5deg);
      }
      50% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
      }
      52% {
        transform: translate(-0.5px, 1.5px) rotate(0.5deg);
      }
      54% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
      }
      56% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
      }
      58% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
      }
      60% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
      }
      62% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
      }
      64% {
        transform: translate(-1.5px, 1.5px) rotate(1.5deg);
      }
      66% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
      }
      68% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
      }
      70% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
      }
      72% {
        transform: translate(-0.5px, -1.5px) rotate(1.5deg);
      }
      74% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
      }
      76% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
      }
      78% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
      }
      80% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
      }
      82% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
      }
      84% {
        transform: translate(-0.5px, 0.5px) rotate(1.5deg);
      }
      86% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
      }
      88% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
      }
      90% {
        transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
      }
      92% {
        transform: translate(-1.5px, -1.5px) rotate(1.5deg);
      }
      94% {
        transform: translate(0.5px, 0.5px) rotate(-0.5deg);
      }
      96% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
      }
      98% {
        transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
      }
      0%,
      100% {
        transform: translate(0, 0) rotate(0);
      }
}
.platelet-tool {
  display: none;
  color: #aaa;
  top: 100px;
  right: 10px;
  font-size: 14px;
  position: absolute;
}
.platelet:hover .platelet-tool {
    display: block;
}
.platelet-tool i {
        display: block;
        cursor: pointer;
        color: rgb(57, 57, 57);
        background-color: #fff;
        border: 2px solid rgb(57, 57, 57);
        padding: 0 4px;
        margin-bottom: 2px;
        line-height: 20px;
        transition: 0.2s;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-name: shake;
        animation-timing-function: ease-in-out;
}
.platelet-tool i:hover {
        z-index: 1;
        transform: scale(1.2);
        animation: none;
}
</style>
