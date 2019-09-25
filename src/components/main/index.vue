<template>
  <div id="index">
    <div class="idx-wrap">
      
    </div>
    <div class="idx-info">大部分功能暂未更新，<span style="font-size:12px;color:#ddd;">重度懒癌......</span> <p>(*血小板出现恐怖现象请刷新一下)</p><p>(*部分页面代码过多加载很慢，正在想办法解决)</p></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style scoped>
#index{
  height:calc( 100% - 60px );
   padding:40px;
}
#index .idx-wrap{ 
  transition:all 0.3s ease;
  height:100%;
  border-radius:4px;
  background: url(/static/images/xiamu.jpg) no-repeat;
  background-position:center center;
  background-size:100%;
  opacity:0.3;
 -moz-box-shadow:0px 0px 10px #858585; -webkit-box-shadow:0px 0px 10px #858585; box-shadow:0px 0px 10px #858585;
}
#index .idx-wrap:hover{
  opacity:1;
  background-size:102%;
  -moz-box-shadow:0px 0px 17px #858585; -webkit-box-shadow:0px 0px 17px #858585; box-shadow:0px 0px 17px #858585;
}
#index .idx-info{
  padding:20px;
  width:400px;
  height:100px;
  line-height:26px;
  text-align:center;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  border-radius:4px;
  background-color:#fff;
}
</style>
