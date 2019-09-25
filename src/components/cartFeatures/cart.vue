<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
  	<strong>PHP + HTML</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:600px;">
	  <code ref="message" class="language-html">
		// $result_arr是通过$userid获取的购物车表和产品数据结果
		// 以下是购物车列表代码
		&lt?php  
			foreach ($result_arr as $rowbt) {
				$gwc_shuliang=$rowbt->gwc_shuliang;
				$gwc_procode=$rowbt->gwc_procode;
				$gwc_prodes=$rowbt->gwc_prodes;
				$gwc_key=$rowbt->gwc_key;
				$gwc_id=$rowbt->gwc_id;
				$pid=$rowbt->pid;
				$type=$rowbt->category;
				$brand=$rowbt->cs;
				$okpcode=$rowbt->okpcode;
				$jianjie1=$rowbt->jianjie1;
		        $jianjie0=getjan($jianjie1);
		        $jianjie2=$rowbt->jianjie2;
		        $price=get_ouprice($rowbt->pprice);
		        $SubTotal=ceil($gwc_shuliang*$price);
		        $imgUrl=get_img_file($type)."/".$okpcode.".jpg";
				$typeName = $cateClass->getSecondLevel($type)->secondArr["typeName"];
				$typeUrl0 = $cateClass->getSecondLevel($type)->secondArr["typeUrl"];
				$productUrl=get_products_url(trim(strtolower($gwc_key)),$type,$typeUrl0,$pid);

		?&gt
		&lttr data-pid="&lt?php echo $gwc_id; ?&gt"&gt  // data-pid是必须,且值为gwc_id,用于辨识。
			&lttd&gt
				&ltdiv class="cart-product-thumb"&gt
					&lta href="&lt?php echo $productUrl; ?&gt"&gt&ltimg class="cart-img img-thumbnail" src="&lt?php echo $imgUrl; ?&gt" alt="&lt?php echo $gwc_procode ; ?&gt" /&gt&lt/a&gt
				&lt/div&gt
			&lt/td&gt
			&lttd&gt
				&ltdiv class="cart-product-name"&gt
					&lth5&gt&lta href="&lt?php echo $productUrl; ?&gt"&gt&lt?php echo $gwc_prodes; ?&gt&lt/a&gt&lt/h5&gt
				&lt/div&gt
			&lt/td&gt
			&lttd&gt
				&ltspan class="cart-product-price"&gt&lt?php echo $gwc_key; ?&gt&lt/span&gt
			&lt/td&gt
			&lttd&gt
				&ltdiv class="cart-quantity-changer"&gt
					&lta class="value-decrease qtybutton" onclick="shopCart.minusCart(this,&lt?php echo $gwc_id; ?&gt)"&gt-&lt/a&gt  // onclick="shopCart.minusCart(this,&lt?php echo $gwc_id; ?&gt)"是必须,是增加数量函数。
					&ltinput type="text" name="gwc_shuliang" min="1" max="999" value="&lt?php echo $gwc_shuliang; ?&gt" /&gt  // name="gwc_shuliang"是必须。
					&lta class="value-increase qtybutton" onclick="shopCart.plusCart(this,&lt?php echo $gwc_id; ?&gt);return false;"&gt+&lt/a&gt // onclick="shopCart.plusCart(this,&lt?php echo $gwc_id; ?&gt)"是必须,是减少数量函数。
				&lt/div&gt
			&lt/td&gt
			&lttd&gt
				&ltspan class="cart-product-price"&gt&lt?php echo $price; ?&gt &lt?php echo $unit; ?&gt&lt/span&gt
			&lt/td&gt
			&lttd&gt
				&ltspan class="cart-product-price"&gt&ltspan class="subtotal"&gt&lt?php echo $SubTotal; ?&gt&lt/span&gt &lt?php echo $unit; ?&gt&lt/span&gt  // class="subtotal"类名是必须,用于异步改变单个产品小计。
			&lt/td&gt
			&lttd&gt
				&ltdiv class="product-remove"&gt
					&lta onclick="shopCart.deleteCart(this,&lt?php echo $gwc_id; ?&gt);"&gt  // onclick="shopCart.deleteCart(this,&lt?php echo $gwc_id; ?&gt);"是必须,用于删除当前产品。
						&lti class="fa fa-times" aria-hidden="true"&gt&lt/i&gt
					&lt/a&gt
				&lt/div&gt
			&lt/td&gt
		&lt/tr&gt
		&lt?php } ?&gt




		//  以下是购物车显示各类价格的代码
		&lttr&gt
			&lttd&gtSub-Total:&lt/td&gt
			&lttd&gt&ltspan class="nof_subtotal"&gt0&lt/span&gt &lt?php echo $unit; ?&gt&lt/td&gt  // class="nof_subtotal"是必须,具有该类名的标签内会显示没有经过运费计算和折扣计算的价格。
		&lt/tr&gt
		&lttr&gt
			&lttd&gtDiscount:&lt/td&gt
			&lttd&gt&ltspan style="font-size: 16px; color: red; font-weight: bold;"&gt-&ltspan class="discount"&gt0&lt/span&gt&lt/span&gt &lt?php echo $unit; ?&gt&lt/td&gt  // class="discount"是必须,具有该类名的标签内会显示折扣减少的价格。
		&lt/tr&gt
		&lttr&gt
			&lttd&gtShipping Fee:&lt/td&gt
			&lttd&gt&ltspan class="freight"&gt0&lt/span&gt &lt?php echo $unit; ?&gt&lt/td&gt  // class="freight"是必须,具有该类名的标签内会显示运费。
		&lt/tr&gt
		&lttr&gt
			&lttd&gtTotal:&lt/td&gt
			&lttd&gt&ltspan class="total"&gt0&lt/span&gt &lt?php echo $unit; ?&gt&lt/td&gt  // class="total"是必须,具有该类名的标签内会显示最后的结算价格。
		&lt/tr&gt
	  </code>
	</pre>
	<strong>顶部购物车HTML</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-html">


	  	//  以下是顶部购物车结构代码
  		&ltli&gt
			&lta href="cart.html"&gt
				&ltspan class="cart-icon"&gt&lti class="fa fa-shopping-cart"&gt&lt/i&gt&lt/span&gt
				&ltspan class="cart-total"&gt
					&ltspan class="cart-title"&gtshopping cart&lt/span&gt
    				&ltspan class="cart-item"&gt&ltspan class="item-number"&gt0&lt/span&gt item(s)- &lt/span&gt  // class="item-number"用于显示购物不同产品的数量。
    				&ltspan class="top-cart-price"&gt&ltspan class="total"&gt0&lt/span&gt &lt?php echo $unit; ?&gt&lt/span&gt  // class="total"是必须,具有该类名的标签内会显示最后的结算价格。
				&lt/span&gt
			&lt/a&gt
			&ltdiv class="mini-cart-content"&gt
				&ltdiv class="top-cart-list"&gt  // top-cart-list是列表父级类名，可修改，但必须与cart.js中的一致。
					&lt!-- item list --&gt  // 由js循环出产品列表结构。
				&lt/div&gt
				&ltdiv class="cart-inner-bottom"&gt
					&ltspan class="top-total"&gt
						Total:
						&ltspan class="total"&gt0&lt/span&gt &lt?php echo $unit; ?&gt  // class="total"是必须,具有该类名的标签内会显示最后的结算价格。
					&lt/span&gt
					&ltspan class="cart-button-top"&gt
						&lta href="cart.html"&gtView Cart&lt/a&gt
					&lt/span&gt
				&lt/div&gt
			&lt/div&gt
		&lt/li&gt
	  </code>
	</pre>
	<strong>cart.js</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:800px;">
	  <code ref="message" class="language-js">
	/**
	*  cart.js
	*  
	**/
	var shopCart = {
        url: '',
        number: 0,
        pid: 0,
        check:false,
        ajaxAddCart:function(obj) { //该函数用于异步加入购物车（飞入购物车）
            $.ajax({
                type: "POST",
                url: "../../data/cart_buy.php",
                data: {animate:obj.animate,pid:obj.pid,jian:obj.jian,gwc_shuliang:obj.gwc_shuliang,gwc_procode:obj.gwc_procode,gwc_prodes:obj.gwc_prodes},
                dataType: "JSON",
                success: function(data){
                    var str='';
                    for (var i in data[1]) {  //该结构为顶部购物车产品列表结构
                        str+='&ltdiv class="cart-img-details" data-pid="'+i+'"&gt\
                                &ltdiv class="cart-img-photo"&gt\
                                    &lta href="'+data[1][i].productUrl+'"&gt&ltimg src="'+data[1][i].img+'" alt="#"&gt&lt/a&gt\
                                &lt/div&gt\
                                &ltdiv class="cart-img-content"&gt\
                                    &lta href="'+data[1][i].productUrl+'"&gt&lth4&gt'+data[1][i].gwc_prodes+'&lt/h4&gt&lt/a&gt\
                                    &ltspan&gt\
                                        &ltstrong class="text-right"&gt&ltinput class="top-number" disabled type="text" name="gwc_shuliang" value="'+data[1][i].number+'"/&gtX&lt/strong&gt\
                                        &ltstrong class="cart-price text-right"&gt'+data[1][i].price+' '+data[1][i].unit+'&lt/strong&gt\
                                    &lt/span&gt\
                                &lt/div&gt\
                                &ltdiv class="pro-del"&gt\
                                    &lta href="javascript:;" onclick="shopCart.deleteCart(this,'+i+')"&gt&lti class="fa fa-times"&gt&lt/i&gt&lt/a&gt\
                                &lt/div&gt\
                            &lt/div&gt';
                    };
                    $(".top-cart-list").html(str);  //将循环的结构放入具有该类名的标签内
                    $(".total").text(data[0].total);  //显示总价
                    $(".item-number").text(data[0].cartlistnum);  //显示总数
                },
                complete:function(){
                    //此处可以在购物车操作完成后做一些事情，也可以掉
                },
                error:function(error){
                    console.log(error);
                }
            });
        },
        Cart: function (type, id, number,action="") {  //该函数用于异步操作购物车，如增删改查
            var offCheck = $("#offprice").prop("checked");  //获取选中的折扣，没有折扣选项可以删除
            this.check = offCheck;
            this.url = "../../data/json_ajax_cart.php";
            $.ajax({
                method: 'post',
                url: this.url,
                data: {'id': id, 'number': number, 'action': action, 'check': this.check},
                dataType: 'Json',
                success: function (data) {
                    var totalnum=0;
                    for (var i in data[1]) { 
                        totalnum += Number(data[1][i].number);
                    };
                    getOff(1,totalnum);  //执行折扣函数,该函数存在于公共frame-js.php文件
                    if (type == 1) {  //type==1,展示顶部购物车
                        if (data[1].length==0) {  //购物车为空的时候,显示一些信息提示
                            var str = '', str2 = '';
                            str2 += '&ltimg src="images/kong.png" width="100%" /&gt&ltp&gtYour shopping cart is empty, please add items.&lt/p&gt';
                            str += '&lta style="display:block;width:60px;height:30px;line-height:30px;text-align:center;color:#fff;background:#26acce;" href="/index.html"&gtindex &lt/a&gt';
                            str = str2 + str;
                            $(".cart_wrap").html(str);
                            $(".top-cart-list").html(str2);
                        } else {
                            var str='';
                            for (var i in data[1]) { //头部购物车
                                str+='&ltdiv class="cart-img-details" data-pid="'+i+'"&gt\
                                        &ltdiv class="cart-img-photo"&gt\
                                            &lta href="'+data[1][i].productUrl+'"&gt&ltimg src="'+data[1][i].img+'"&gt&lt/a&gt\
                                        &lt/div&gt\
                                        &ltdiv class="cart-img-content"&gt\
                                            &lta href="'+data[1][i].productUrl+'"&gt&lth4&gt'+data[1][i].gwc_prodes+'&lt/h4&gt&lt/a&gt\
                                            &ltspan&gt\
                                                &ltstrong class="text-right"&gt&ltinput class="top-number" disabled type="text" name="gwc_shuliang" value="'+data[1][i].number+'"/&gtX&lt/strong&gt\
                                                &ltstrong class="cart-price text-right"&gt'+data[1][i].price+' '+data[1][i].unit+'&lt/strong&gt\
                                            &lt/span&gt\
                                        &lt/div&gt\
                                        &ltdiv class="pro-del"&gt\
                                            &lta href="javascript:;" onclick="shopCart.deleteCart(this,'+i+')"&gt&lti class="fa fa-times"&gt&lt/i&gt&lt/a&gt\
                                        &lt/div&gt\
                                    &lt/div&gt';
                            };
                            $(".top-cart-list").html(str);
                            $(".item-number").text(data[0].cartlistnum);
                            $(".nof_subtotal").text(data[0].subtotal);
                            $(".freight").text(data[0].shipping);
                            $(".total").text(data[0].total);
                        };
                        $(".discount").text(data[0].discount);
                    } else if (type == 2) { //页面购物车
                        $(".nof_subtotal").text(data[0].subtotal);
                        $(".discount").text(data[0].discount);
                        $(".freight").text(data[0].shipping);
                        $(".total").text(data[0].total);
                    } else if (type == 3) { //购物车加减
                        $("[data-pid='"+id+"']").find(".subtotal").text(data[1][id].subtotal);
                        $("[data-pid='"+id+"']").find("[name='gwc_shuliang']").val(data[1][id].number);
                        $(".nof_subtotal").text(data[0].subtotal);
                        $(".discount").text(data[0].discount);
                        $(".freight").text(data[0].shipping);
                        $(".total").text(data[0].total);
                    } else if (type == 4) { //购物车删除
                        if (data[1].length==0) {  //购物车为空的时候,显示一些信息提示
                            var str = '', str2 = '';
                            str2 += '&ltimg src="images/kong.png" width="100%" /&gt&ltp&gtYour shopping cart is empty, please add items.&lt/p&gt';
                            str += '&lta style="display:block;width:60px;height:30px;line-height:30px;text-align:center;color:#fff;background:#26acce;" href="/index.html"&gtindex &lt/a&gt';
                            str = str2 + str;
                            $(".cart_wrap").html(str);
                            $(".top-cart-list").html(str2);
                            $(".item-number").text(0);
                            $(".total").text(0);
                        };
                        $(".item-number").text(data[0].cartlistnum);
                        $(".nof_subtotal").text(data[0].subtotal);
                        $(".discount").text(data[0].discount);
                        $(".freight").text(data[0].shipping);
                        $(".total").text(data[0].total);
                        $("[data-pid='"+id+"']").remove();
                    };
                }
            });
            return false;
        },
        minusCart: function (_this, id) {
            var num_input = $(_this).next('input[name="gwc_shuliang"]');
            var num = parseInt(num_input.val());
            num--;
            if (num <= 0) {
                return false;
            } else {
                num_input.val(num);
                this.Cart(3, id, num,1);
            };
        },
        plusCart: function(_this, id) {  
            var num_input = $(_this).prev('input[name="gwc_shuliang"]');
            var num = parseInt(num_input.val());
            num = parseInt(num) + 1;
            num_input.val(num);
            this.Cart(3, id, num,1);
        },
        deleteCart: function (_this, id) {
            var num_input = $("[data-pid='"+id+"']").find('input[name="gwc_shuliang"]');
            var num = parseInt(num_input.val());
            this.Cart(4, id, num,0);
        }
    }
    shopCart.Cart(1,"","",""); //页面加载时执行，用于显示顶部购物车
	  </code>
	</pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'Cart',
  data () {
    return {
      msg: 'cart'
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
