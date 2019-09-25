<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
  	<strong>html</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:600px;">
	  <code ref="message" class="language-html">
  		// 快速付款表单
  		&ltform data-action="app/payment.php" action="app/payment.php" id="fastpay" method="POST" target="_blank"&gt
        &lt/form&gt
        // 普通付款表单
        &ltform data-action="app/payment.php?type=<?=$url?>" action="app/payment.php?type=<?=$url?>" method="post" id="defaultForm" class="form-horizontal" target="_blank"&gt
        &lt/form&gt
	  </code>
	</pre>
	<strong>js</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-js">
        // 获取折扣函数
        function getOff(act,qtyNum=0) {
          if (act==1) {
            var offCheck = $("#offprice").prop("checked");  //获取选中状态的单选框
            var fastPayUrl = $('#fastpay').attr("data-action"),payUrl = $("#defaultForm").attr("data-action");  //分别获取快速付款和普通付款上的data-action的值，（data-action的值是不带折扣的路径）
        &lt?php require_once("public/function.php"); $off = lock_url("discount", "aaaaa");?&gt  //加密
            if (offCheck==true) {
              if (qtyNum &lt 5) {
                popInfo();  //提示弹窗
                $(".discount").text(0);
              } else {
                fastPayUrl = fastPayUrl+'?checkdis=<?php echo $off; ?>';
                payUrl = payUrl+'&checkdis=<?php echo $off; ?>';
                $("#pop-info-wrap").remove();
              }
            } else {
              close_pop();  //关闭弹窗
            };
            $('#fastpay').attr({"action":fastPayUrl});
            $("#defaultForm").attr({"action":payUrl});
          }
        };
        // 折扣提示弹窗
        function popInfo() {
          var infostr='Your purchase quantity does not meet the wholesale purchase conditions';
          var popHtml='&ltdiv id="pop-info-wrap" style="z-index:999;position:absolute;bottom:35px;left:0;background-color:#fff;-moz-box-shadow:2px 4px 13px #ADADAD; -webkit-box-shadow:2px 4px 13px #ADADAD; box-shadow:2px 4px 13px #ADADAD;width:100%;max-height:200px;"&gt&ltp id="pop-info" style="padding: 20px;font-size: 16px;"&gt'+infostr+'&lt/p&gt&ltbutton class="btn btn-warning btn-xs" onclick="close_pop()" style="position: absolute;right: 10px;bottom: 10px;"&gtclose&lt/button&gt&ltspan style="position: absolute;left: 50%;width: 16px;height: 16px;bottom: -7px;background: #fff;transform: rotateZ(135deg);"&gt&lt/span&gt&lt/div&gt';
          $(".pop-site").html(popHtml);
        };
        // 关闭弹窗
        function close_pop() {
          $("#pop-info-wrap").remove();
          $("#offprice").prop("checked",false);
        };
	  </code>
	</pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'getOff',
  data () {
    return {
      msg: 'getOff'
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
