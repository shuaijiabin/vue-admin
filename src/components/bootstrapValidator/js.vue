<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
  <strong>引入的js</strong>
  <pre class="line-numbers" style="white-space:pre-wrap;">
    <code ref="message" class="language-js">
        // 引入bootstrap.min.j和验证BootstrapValidator.js, us_state.js是美国的洲和城市名（当选择美国时显示）,pro_msg.js提供验证信息以及验证规则
        &ltscript src="static/js/bootstrap.min.js"&gt&lt/script&gt
        &ltscript src="static/js/BootstrapValidator.js"&gt&lt/script&gt
        &ltscript src="static/js/us_state.js"&gt&lt/script&gt //这个js酌情使用，会对州的范围有限制
        &ltscript src="static/js/pro_msg.js"&gt&lt/script&gt
    </code>
  </pre>
  <strong>us_state.js</strong>
  <pre class="line-numbers" style="white-space:pre-wrap;max-height:400px;">
    <code ref="message" class="language-js">
      代码量过多，请参考此地址 https://github.com/LPDLKBN/tech-electronic.com/blob/master/static/js/us_state.js
    </code>
  </pre>
  <strong>pro_msg.js</strong>
  <pre class="line-numbers" style="white-space:pre-wrap;">
    <code ref="message" class="language-js">
        var info={
          feedbackIcons: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
          },
          fields: {
              country: {
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              address1: {
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              personname:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              city:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              postal:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      },
                      regexp: {
                          message: 'Please enter the postal code of your country'  
                      }
                  }
              },
              phone:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              state:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              phonenumber:{
                  validators: {
                      notEmpty: {
                          message: ' *Please complete all required fields!'
                      }
                  }
              },
              email:{
                  validators: {
                      notEmpty: {
                          message: '*Please complete all required fields!'
                      }
                  }
              }
          }
      };
      function FunReg(a) {
          let val=$('#'+a+' option:selected').val();
          switch(val){
              case "JP":
                  info.fields.postal.validators.regexp.regexp=/^[0-9-]{7,8}$/;
                  $('#postal').attr("placeholder","0000000");
                  break;
              case "CA":
                  info.fields.postal.validators.regexp.regexp=/^\d{6}$/;
                  $('#postal').attr("placeholder","000000");
                  break;
              case "RU":
                  info.fields.postal.validators.regexp.regexp=/^\d{6}$/;
                  $('#postal').attr("placeholder","000000");
                  break;
              case "SE":
                  info.fields.postal.validators.regexp.regexp=/^\d{5}$/;
                  $('#postal').attr("placeholder","00000");
                  break;
              default :
                  info.fields.postal.validators.regexp.regexp=/^[\w\s-]{4,}$/;
                  $('#postal').attr("placeholder","0000+");
                  break;
          };
          getSelect(us_state,val);  //此处执行获取美国州和城市的函数
      };
      FunReg("countrySelector");
      $('#defaultForm').bootstrapValidator(info);
    </code>
  </pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'BootstrapValidator_js',
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
