<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以是新增电子产品后的分类
  	</div>
  	<strong>get_category.class.php</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:600px;">
	  <code ref="message" class="language-js">
  		<?php  
      /**
       * 定义产品分类和meta、title标签的内容
       */
      class Category
      {
        public $allType =array("allTypeName"=>"All - By Type","allTypeUrl"=>"battery.html");
        public $firstArr =array();//一级分类数组
        public $secondArr =array();//二级分类数组
        // 定义meta标签keyword和description以及title
        public $title="";
        public $metaKeyword="";
        public $metaDescription="";
        // 赋值一级分类
        public function getFirstLevel($be_type)
        {
          switch ($be_type) { //A开头的一级分类 此每类有独立链接
            case 'A01':
              $this->firstArr["be_typeName"] = "Toy & Baby Gear";//一级分类名
              $this->firstArr["be_typeUrl"] = "Toy-Baby-Gear";//一级分类区分词
              return $this;
              break;
            case 'A02':
              $this->firstArr["be_typeName"] = "Car Parts & Accessories";//一级分类名
              $this->firstArr["be_typeUrl"] = "Car-Parts-Accessories";//一级分类区分词
              return $this;
              break;
            case 'A03':
              $this->firstArr["be_typeName"] = "Home & Living";//一级分类名
              $this->firstArr["be_typeUrl"] = "Home-Living";//一级分类区分词
              return $this;
              break;
            case 'A04':
              $this->firstArr["be_typeName"] = "Kitchen & Dining";//一级分类名
              $this->firstArr["be_typeUrl"] = "Kitchen-Dining";//一级分类区分词
              return $this;
              break;
            case 'A05':
              $this->firstArr["be_typeName"] = "Mobile phones & Accessories";//一级分类名
              $this->firstArr["be_typeUrl"] = "Mobile-phones-Accessories";//一级分类区分词
              return $this;
              break;
            case 'A06':
              $this->firstArr["be_typeName"] = "Laptops & Tablets";//一级分类名
              $this->firstArr["be_typeUrl"] = "Laptops-Tablets";//一级分类区分词
              return $this;
              break;
            case 'A07':
              $this->firstArr["be_typeName"] = "Home Audio & Video";//一级分类名
              $this->firstArr["be_typeUrl"] = "Home-Audio-Video";//一级分类区分词
              return $this;
              break;
            case 'A08':
              $this->firstArr["be_typeName"] = "Health & Beauty";//一级分类名
              $this->firstArr["be_typeUrl"] = "Health-Beauty";//一级分类区分词
              return $this;
              break;
            case 'A09':
              $this->firstArr["be_typeName"] = "Video Cameras & Camcorder Accessories";//一级分类名
              $this->firstArr["be_typeUrl"] = "Video-Cameras";//一级分类区分词
              return $this;
              break;
            case 'A11':
              $this->firstArr["be_typeName"] = "Lights & Lighting";//一级分类名
              $this->firstArr["be_typeUrl"] = "Lights-Lighting";//一级分类区分词
              return $this;
              break;
            case 'A12':
              $this->firstArr["be_typeName"] = "Electrical Equipment & Supplies";//一级分类名
              $this->firstArr["be_typeUrl"] = "Electrical-Equipment-Supplies";//一级分类区分词
              return $this;
              break;
            case 'A13':
              $this->firstArr["be_typeName"] = "Security & Safety";//一级分类名
              $this->firstArr["be_typeUrl"] = "Security-Safety";//一级分类区分词
              return $this;
              break;
            case 'A14':
              $this->firstArr["be_typeName"] = "Computers & Networking";//一级分类名
              $this->firstArr["be_typeUrl"] = "Computers-Networking";//一级分类区分词
              return $this;
              break;
            case 'B2':
              $this->firstArr["be_typeName"] = "Telecommunication / multimedia";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'C3':
              $this->firstArr["be_typeName"] = "Medical";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'D4':
              $this->firstArr["be_typeName"] = "Professional equipment";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'E5':
              $this->firstArr["be_typeName"] = "Industrial Equipment";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'F6':
              $this->firstArr["be_typeName"] = "House";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'G7':
              $this->firstArr["be_typeName"] = "Outdoor leisure";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'H8':
              $this->firstArr["be_typeName"] = "Accessories";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            case 'K9':
              $this->firstArr["be_typeName"] = "Automobiles & Motorcycles";//一级分类名
              $this->firstArr["be_typeUrl"] = "";//一级分类区分词
              return $this;
              break;
            default:
              break;
          }
        }
        //赋值二级分类
        public function getSecondLevel($type)
        { ... }
        // 赋值meta标签keyword和description以及title
        public function get_meta_seo($page,$arr=array())
        { ... }
      }
      ?>
	  </code>
	</pre>
  <div class="dm-contain">
   <p>由于与代码过多导致当前页面加载过慢，我就将get_category.class.php源代码上传到github，如若需要请<a style="display:inline-block;color:red;" href="https://github.com/LPDLKBN/get_category.class.php" target="_blank">点击这里</a>跳转下载</p>
  </div>
	<strong>获取分类方法</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-js">
        // 在需要用到这个类里面的内容的页面创建实例 $cateClass = new Category;

        //例如获取首页的关键词：
        &lt?php echo $cateClass->get_meta_seo("index")->metaKeyword; ?&gt //get_meta_seo()函数的第一个参数为当前页面标识
        //例如获取详情页的关键词：
        //$arr为当前页面获取的一些产品的任何信息，将所需要的信息存入这个数组，如下
        $arr=(array)$result_arr;
        $typeName = $cateClass->getSecondLevel($type)->secondArr["typeName"]; // 获取$type获取二级分类名。$type为product表中的category字段整理后的内容
        $typeUrl0 = $cateClass->getSecondLevel($type)->secondArr["typeUrl"];  // 获取$type获取二级路径名。同上
        $arr["be_type"]=$be_type;
        $arr["typeName"]=$typeName;
        &lt?php echo $cateClass->get_meta_seo("product",$arr)->metaKeyword; ?&gt  
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
