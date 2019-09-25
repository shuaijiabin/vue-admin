<template>
  <div id="wrap-star" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain clearfix">
  		<div id="star-rating">
		</div>
		<p id="star-tips"></p>
  	</div>
  	<strong>CSS</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-css">
	#star-rating{ float:left; }
	#star-tips{ float:left; line-height:26px; padding-left:8px; }
	#star-rating i{ font-style: normal; cursor: pointer;display:inline-block;transition:all 0.3s ease; } /* 需要添加兼容样式 */
	#star-rating i:hover{ transform:scale(1.2); } /* 需要添加兼容样式 */
	  </code>
	</pre>
	<strong>HTML</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-html">
  	&ltdiv id="star-rating"&gt&lt/div&gt
	&ltp id="star-tips"&gt&lt/p&gt
	  </code>
	</pre>
	<strong>JS</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:400px;">
	  <code ref="message" class="language-js">
	/**
	*  Star Rating
	*  https://github.com/LPDLKBN/Star-rating
	**/
    ;(function(undefined){
    	"use strict"
    	var _global;
    	var PDStar = function() {
    		this.isScoreFinish = false;  //评分选定条件
    		this.defaults = {
	            tipEle: null,  //提示DOM
	            fontSize: "40px",  //图标大小
	            isReScore: false,  //是否可以重新评分
	            score: null,  //最终或默认评分状态
	            tips: ["1分", "2分", "3分", "4分", "5分"],  //评分提示信息
	            callBack: null,  //完成评分回调函数
	            content: "★",  //评分图标
	            defultColor: "rgb(220,220,220)",  //未选中状态颜色
	            selectColor: ["rgb(198, 209, 222)", "#8eb9f5", "#ffac38", "#ff8547", "#f54545"] //选中状态颜色
	        };
    	};
    	PDStar.prototype = {
    		PDstar:function(ele,options) {
    			this.element = ele;
    			this.defaults.tipEle = options.tipEle;
    			this.defaults.tips = (options.tips!==undefined && options.tips) || this.defaults.tips;
    			this.defaults.score = (options.score!==undefined && options.score) || this.defaults.score;
    			this.defaults.content = (options.content!==undefined && options.content) || this.defaults.content;
    			this.defaults.fontSize = (options.fontSize!==undefined && options.fontSize) || this.defaults.fontSize;
    			this.defaults.callBack = (options.callBack!==undefined && options.callBack) || this.defaults.callBack;
    			this.defaults.isReScore = (options.isReScore!==undefined && options.isReScore) || this.defaults.isReScore;
    			this.defaults.selectColor = (options.selectColor!==undefined && options.selectColor) || this.defaults.selectColor;
    			this.defaults.defultColor = (options.defultColor!==undefined && options.defultColor) || this.defaults.defultColor;
    			this.init();
    		},
    		init: function() {
				var _This = this;
				var starRating = document.getElementById(_This.element);
				var starTips = document.getElementById(_This.defaults.tipEle);
				var starEle;
				if (!/<[-\s\w\.\/]+>|<[a-z\/]+>/i.test(_This.defaults.content)) {
					starEle = document.createElement("i");
					starEle.innerHTML = this.defaults.content;
				} else {
					var objE = document.createElement("div");
					objE.innerHTML = this.defaults.content;
					starEle = objE.childNodes[0];
				};
				starEle.style.color = _This.defaults.defultColor;
				starEle.style.fontSize = _This.defaults.fontSize;
				for (var i = 0; i < 5; i++) {
					var starEles = starEle.cloneNode(true);
					starRating.appendChild(starEles);
				};
				var stars = starRating.children;
				for (let i = 0; i < this.defaults.score; i++) {  //设置默认评分
					stars[i].style.color = _This.defaults.selectColor[this.defaults.score-1];
	                starTips.innerHTML = _This.defaults.tips[this.defaults.score-1];
	                starTips.style.color = _This.defaults.selectColor[this.defaults.score-1];
				};
				for (var i = 0; i < stars.length; i++) {
					stars[i].index = i;
	        			stars[i].addEventListener("mouseover", function(event) {
	        				var event = event || window.event;
							event.preventDefault();
		        			if (!_This.isScoreFinish) {
		        				for (var j = 0; j < 5; j++) {
		        					if (j<=event.target.index) {
		        						for (var k = 0; k < j+1; k++) {
		        							stars[k].style.color = _This.defaults.selectColor[j];
		        						};
		        						starTips.innerHTML = _This.defaults.tips[j];
	                                    starTips.style.color = _This.defaults.selectColor[j];
		        					} else {
		        						stars[j].style.color = _This.defaults.defultColor;
		        					};
		        					
		        				};
		        			};
	        			});
					stars[i].addEventListener("click", function(event) {
						var event = event || window.event;
						event.preventDefault();
						if (_This.isScoreFinish) {
							return false;
						};
	        				_This.defaults.score = event.target.index+1;
	        				if (_This.defaults.callBack!==null) {
	        					_This.defaults.callBack(_This.defaults.score);
	        				};
	        				_This.isScoreFinish = true;
	        			});
				};
				starRating.addEventListener("mouseleave", function(event) {
					var event = event || window.event;
					event.preventDefault();
	        		if (!_This.isScoreFinish) {
	        			for (var i = 0; i < stars.length; i++) {
	        				stars[i].style.color = _This.defaults.defultColor;
	        			};
	        			starTips.innerHTML = "";
	        		} else {
	        			return false;
	        		};
				});
				starRating.addEventListener("mouseenter", function (event) {
					var event = event || window.event;
					event.preventDefault();
					if (_This.defaults.isReScore) 
	        			_This.isScoreFinish = false;
				});
			},
    	};
    	// 将插件对象暴露给全局对象
	    _global = (function(){ return this || (0, eval)('this'); }());
	    if (typeof module !== "undefined" && module.exports) {
	        module.exports = PDStar;
	    } else if (typeof define === "function" && define.amd) {
	        define(function(){return PDStar;});
	    } else {
	        !('PDStar' in _global) && (_global.PDStar = PDStar);
	    }
    })();
	  </code>
	</pre>
	<strong>调用</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-js">
  	window.onload = function () {
		var pdStar = new PDStar();
		pdStar.PDstar("star-rating",{
			tipEle: "star-tips", //信息提示标签
			fontSize: "20px",  //图标大小
			tips: ["不推荐", "一般", "不错", "很棒", "极力推荐！"],  //提示信息内容
			callBack: function(score) { //选中后的回调函数
				console.log(score);
			},
			isReScore: true,  //是否可以重选
			score: 3,  //初始状态星数
			content: "★",  //评分图标
            defultColor: "rgb(220,220,220)",  //未选中状态颜色
            selectColor: ["rgb(198, 209, 222)", "#8eb9f5", "#ffac38", "#ff8547", "#f54545"] //选中状态颜色
		});
	};
	  </code>
	</pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'StarRating',
  data () {
    return {
      msg: 'StarRating'
    }
  },
  mounted: function () {
  	Prism.highlightAll()
  	var pdStar = new PDStar();
	pdStar.PDstar("star-rating",{
		tipEle: "star-tips",
		fontSize: "20px",
		tips: ["不推荐", "一般", "不错", "很棒", "极力推荐！"],
		isReScore: true
	})
  },
  methods: {
  }
}
</script>

<style scope>
#star-rating{ float:left; }
#star-tips{ float:left; line-height:26px; padding-left:8px; }
#star-rating i{ font-style: normal; cursor: pointer;display:inline-block;transition:all 0.3s ease; }
#star-rating i:hover{ transform:scale(1.2); }
</style>
