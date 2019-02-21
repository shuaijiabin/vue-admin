<template>
  <div class="login">
	<pre class="line-numbers" style="white-space:pre-wrap;">
	  <code ref="message" class="language-js">
		//Star Rating
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
		        				if (_This.defaults.isReScore) 
		        					_This.isScoreFinish = false;
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
					starRating.addEventListener("mouseleave", function() {
		        		if (!_This.isScoreFinish) {
		        			for (var i = 0; i < stars.length; i++) {
		        				stars[i].style.color = _This.defaults.defultColor;
		        			};
		        			starTips.innerHTML = "";
		        		} else {
		        			return false;
		        		};
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
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  data () {
    return {
      msg: 'StarRating'
    }
  },
  mounted: function () {
  	console.log(this.$refs.message.innerHTML)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
pre {
    display: block;
    background-color: #282c34;
    color: #fff;
    padding: 20px 24px;
    padding-left:40px;
    text-align: left;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    border: 1px solid transparent;
    line-height: 1.4;
    transition: all 0.3s;
    font-size: 14px;
    border-radius: 5px;
    overflow-x: auto;
    margin: 13px 0;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size:0
}
pre code {
    font-family: inherit;
    color: #fff;
}
code {
	margin-left:-40px;
}
.token.block-comment, .token.cdata, .token.comment, .token.doctype, .token.prolog {
    color: #999
}
.token.punctuation {
    color: #ccc
}
.token.attr-name, .token.deleted, .token.namespace, .token.tag {
    color: #e2777a
}
.token.function-name {
    color: #6196cc
}
.token.boolean, .token.function, .token.number {
    color: #f08d49
}
.token.class-name, .token.constant, .token.property, .token.symbol {
    color: #f8c555
}
.token.atrule, .token.builtin, .token.important, .token.keyword, .token.selector {
    color: #cc99cd
}
.token.attr-value, .token.char, .token.regex, .token.string, .token.variable {
    color: #7ec699
}
.token.entity, .token.operator, .token.url {
    color: #67cdcc
}
.token.bold, .token.important {
    font-weight: 700
}
.token.italic {
    font-style: italic
}
.token.entity {
    cursor: help
}
.token.inserted {
    color: green
}
</style>
