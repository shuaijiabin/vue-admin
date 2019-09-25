<template>
  <div id="JSON-LD-wrap" class="prism-theme">
  	<strong>JSON-LD</strong>
  	<div class="dm-contain">
  		数据结构化的作用可以让谷歌搜索出的结果上显示更多的内容，详情请参考此地址 <a style="display:inline-block;" href="https://developers.google.com/search/docs/guides/intro-structured-data" target="_blank">https://developers.google.com/search/docs/guides/intro-structured-data</a>
  	</div>
  <strong>引入的js</strong>
  <pre class="line-numbers" style="white-space:pre-wrap;">
    <code ref="message" class="language-js">
      //以下数据结构是放到详情页的，上面一段是一个产品的部分信息，下面一段是详情页的面包屑，这段是以tech-electronic.com网站为例，具体参数的值根据网站php设置的对应的变量来更新。 JSON-LD的检测工具地址 https://search.google.com/structured-data/testing-tool

        //下面没做注释的均为JSON-LD的固定参数值，不包括面包屑数据结构。 标 //* 表示如果页面没有评论可以删除此数据结构
        &ltscript type="application/ld+json"&gt
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "&lt?php echo $brand." ".$jianjie0; ?&gt",  //产品名
            "image": [
              "&lt?php echo $imgUrl; ?&gt"  //产品图片路径
             ],
            "description": "&lt?php echo $cateClass->getSecondLevel($type)->secondArr["typeName"]; ?&gt &lt?php echo $jianjie0; ?&gt &lt?php echo $jianjie2; ?&gt",  //产品描述
            "sku": "&lt?php echo $pcode; ?&gt",  //产品编码
            "mpn": "&lt?php echo $jianjie0; ?&gt",  //产品型号
            "brand": {
              "@type": "Thing",
              "name": "&lt?php echo $brand; ?&gt"  //产品品牌
            },
          &lt?php if ($reviewCount!=0) { ?&gt
            "aggregateRating": {  //*
              "@type": "AggregateRating",
              "ratingValue": &lt?php echo $average==""?5:$average; ?&gt,  //产品平均评分
              "reviewCount": &lt?php echo $reviewCount; ?&gt  //产品评论数量
            },
          &lt?php } ?&gt
            "offers": {
              "@type": "Offer",
              "url": "&lt?php echo $_config['https'].'/'.$productUrl; ?&gt",  //产品页路径
              "priceCurrency": "&lt?php echo $unit; ?&gt",  //产品价格单位
              "price": "&lt?php echo $price; ?&gt",  //产品价格
              "priceValidUntil": "2020-11-05",  //产品价格有效期
              "itemCondition": "https://schema.org/UsedCondition",
              "availability": "https://schema.org/&lt?php echo $result_arr[0]->stock=="ok"?'InStock':'Discontinued'; ?&gt",  //产品库存  InStock / Discontinued （只允许这两个值）
              "seller": {
                "@type": "Organization",
                "name": "Executive Objects"
              }
            }
          }
          &lt/script&gt

          //以下为面包屑数据
          &ltscript type="application/ld+json"&gt
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "&lt?php echo $_config['https']; ?&gt/index.html"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "&lt?php echo $cateClass->allType["allTypeName"]; ?&gt",
              "item": "&lt?php echo $_config['https'].'/'.$cateClass->allType["allTypeUrl"]; ?&gt"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "&lt?php echo $cateClass->getFirstLevel($be_type)->firstArr["be_typeName"]; ?&gt",
              "item": "&lt?php echo $_config['https'].'/'.$cateClass->allType["allTypeUrl"]; ?>?site=&lt?php echo $be_type; ?&gt"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "&lt?php echo $cateClass->getSecondLevel($type)->secondArr["typeName"]; ?&gt",
              "item": "&lt?php echo $_config['https'].'/'.$typeListUrl; ?&gt"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "&lt?php echo $brand." ".$keyword; ?&gt",
              "item": "&lt?php echo $_config['https'].'/'.$productUrl; ?&gt"
            }]
          }
          &lt/script&gt
      </script>
    </code>
  </pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'json_ld',
  data () {
    return {
      msg: ''
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
