<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
  	<strong>html</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:600px;">
	  <code ref="message" class="language-html">
		// 在加购按钮上执行这个函数 并传入this
		&ltbutton type="button" onclick="flyToCart(this)" class="toch-button toch-add-cart"&gt&lti class="fa fa-shopping-cart"&gt&lt/i&gt&lt/button&gt
	  </code>
	</pre>
	<strong>js</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-js">

        &ltscript src="static/js/fly.js"&gt&lt/script&gt  //需要引入此插件，可到https://github.com/LPDLKBN/tech-electronic.com/blob/master/static/js/fly.js下载
        

        // 飞入购物车函数
        function flyToCart(e) {
            var imgUrl = $(e).parents(".data_input").find("img").eq(0).attr("src"); //.data_input是产品展示区的最外层外套,用来获取当前加购的信息
            var offset = $(".cart-item").offset(),startOffset = $(e).offset(),  //.cart-item是获取顶部购物车的定位
                scrollTop = $(window).scrollTop();
            var flyer = $('&ltimg class="u-flyer" style="width: 40px; height: 40px; border-radius: 50%; z-index: 99999;position: fixed;" src="' + imgUrl + '"&gt');
            var number = $(e).parents(".data_input").find("input[name='gwc_shuliang']").val();
            var pid =  $(e).parents(".data_input").find("input[name='pid']").val();
            var jian =  $(e).parents(".data_input").find("input[name='jian']").val();
            var gwc_procode =  $(e).parents(".data_input").find("input[name='gwc_procode']").val();
            var gwc_prodes =  $(e).parents(".data_input").find("input[name='gwc_prodes']").val();
            flyer.fly({
                start: {
                    left: startOffset.left,
                    top: startOffset.top - scrollTop
                },
                end: {
                    left: offset.left + 40,
                    top: offset.top - scrollTop + 15,
                    width: 0,
                    height: 0
                },
                onEnd: function () {
                    shopCart.ajaxAddCart({
                        animate:1,
                        pid:pid,
                        jian:jian,
                        gwc_shuliang:number,
                        gwc_procode:gwc_procode,
                        gwc_prodes:gwc_prodes
                    });
                    var str = '&lti class="addCartOk"&gt+1&lt/i&gt';  //此处是产品飞入后显示 +1 动画
                    $(".cart-icon").prepend(str);
                    setTimeout(function () {
                        $(".addCartOk:last").remove();
                    }, 1000);
                }
            });
        };
	  </code>
	</pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'flyToCart',
  data () {
    return {
      msg: 'flyToCart'
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
