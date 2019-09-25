<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
	<strong>引入的css</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-css">
        // 引入bootstrap样式,此处需要注意,当bootstrap版本过高时,验证样式不显示或有问题，此时只需要引入下面的bootstrap.font.css,该样式是从低版本bootstrap.min.css中提取出来的验证样式
        &ltlink rel="stylesheet" href="static/css/bootstrap.min.css"&gt
        &ltlink rel="stylesheet" href="static/css/bootstrap.font.css"&gt
	  </code>
	</pre>
  <strong>bootstrap.font.css</strong>
  <pre class="line-numbers" style="white-space:pre-wrap;max-height:400px;">
    <code ref="message" class="language-css">
        代码量过大，请参考此地址 https://github.com/LPDLKBN/tech-electronic.com/blob/master/static/css/bootstrap.font.css
        *使用这段样式的同时，请将bootstrap文件中附带的font文件夹复制到你的项目中（该文件夹用于显示图标）
    </code>
  </pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'BootstrapValidator_css',
  data () {
    return {
      msg: 'BootstrapValidator'
    }
  },
  mounted: function () {
  	Prism.highlightAll()
  },
  methods: {

  }
}
</script>

<style>

</style>
