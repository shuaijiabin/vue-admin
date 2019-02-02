//smileRoll.js
;(function(undefined) {
    "use strict"
    var _global;
    function smileScroll () {
    	// this.smile();
    };
	smileScroll.prototype = {
		init : function () {
			this.scrollType = "all";
			this.hasColBar = false;
			this.hasRowBar = false;
		},
		smile : function (option) {
			this.elementId = option.elementId;
			this.scrollType = option.scrollType;
			this.rowBar = document.createElement("div");
			this.colBar = document.createElement("div");
			var dotstr = '<span></span>';
			this.rowBar.classList.add("row-bar");
			this.colBar.classList.add("col-bar");
			this.rowBar.innerHTML = dotstr;
			this.colBar.innerHTML = dotstr;
			this.viewWidthSet = option.viewWidth; //获取文本可视内容宽度
			this.viewHeightSet = option.viewHeight; //获取文本可视内容高
			this.generate();
			this.moveControl(this);
			this.clickControl(this);
			this.wheelControl("DOMMouseScroll", this);
			this.wheelControl("mousewheel", this);
		},
		generate : function () { //初始化
			this.oSmileScroll = document.getElementsByClassName(this.elementId)[0]; //获取滚动内容最外层元素
			this.oSmileScroll.getElementsByClassName('row-bar')[0]===undefined ? this.hasRowBar = true : this.hasRowBar = false;
			this.oSmileScroll.getElementsByClassName('col-bar')[0]===undefined ? this.hasColBar = true : this.hasColBar = false;
			this.oSmileScroll.appendChild(this.rowBar);
			this.oSmileScroll.appendChild(this.colBar);
			this.ofirstChild = this.oSmileScroll.children[0]; //定义内部DOM
			this.contentWidth = this.ofirstChild.offsetWidth;  //获取整个内容宽度
			this.contentHeight = this.ofirstChild.offsetHeight;  //获取整个内容高度
			/%/.test(this.viewWidthSet) ? this.viewWidthUnit = this.viewWidthSet : this.viewWidthUnit = this.viewWidthSet+ "px";
			/%/.test(this.viewHeightSet) ? this.viewHeightUnit = this.viewHeightSet : this.viewHeightUnit = this.viewHeightSet+ "px";
			this.oSmileScroll.style.cssText = "width :" + this.viewWidthUnit + ";height:" + this.viewHeightUnit; //设置最外层宽度
			this.viewWidth = this.oSmileScroll.offsetWidth;
			this.viewHeight = this.oSmileScroll.offsetHeight;
			this.ratioX = this.viewWidth / this.contentWidth; //获取可视内容与完整内容宽度比例
			this.ratioY = this.viewHeight / this.contentHeight; //获取可视内容与完整内容高度比例
			switch (this.scrollType) {
				case "vertical":
					if (this.hasRowBar && this.ratioY<=1) {
						this.rowBar.style.display = "block";
					};
					break;
				case "horizontal":
					if (this.hasColBar && this.ratioX<=1) {
						this.colBar.style.display = "block";
					};
					break;
				case "all":
					if (this.hasRowBar && this.hasColBar) {
						if (this.ratioY<=1) {
							this.rowBar.style.display = "block";
						};
						if (this.ratioX<=1) {
							this.colBar.style.display = "block";
						};
					};
					break;
			};
			if (this.hasRowBar) {
				this.oRowBar = this.oSmileScroll.getElementsByClassName('row-bar')[0]; //获取横向滚动条最外层元素
				this.oRowDot = this.oRowBar.getElementsByTagName('span')[0]; //获取横向滚动条内部控制元素
				this.oRowBarHeight = this.oRowBar.offsetHeight;
				this.oRowDotHeight = this.oSmileScroll.offsetHeight * this.ratioY;  //响应纵向滑块的高度
				this.oRowDot.style.cssText = "height :" + this.oRowDotHeight + "px;width:100%;"; //设置纵向滑块的高度
			};
			if (this.hasColBar) {
				this.oColBar = this.oSmileScroll.getElementsByClassName('col-bar')[0]; //获取纵向滚动条最外层元素
				this.oColDot = this.oColBar.getElementsByTagName('span')[0]; //获取纵向滚动条内部控制元素
				this.oColBarWidth = this.oColBar.offsetWidth;
				this.oColDotWidth = this.oSmileScroll.offsetWidth * this.ratioX;  //响应纵向滑块的宽度
				this.oColDot.style.cssText = "width :" + this.oColDotWidth + "px;height:100%;"; //设置纵向滑块的宽度
			};
			this.oSmileScrollY = this.oSmileScroll.offsetTop;  //获取组件最外层到可视窗口顶部的距离
			this.oSmileScrollX = this.oSmileScroll.offsetLeft;  //获取组件最外层到可视窗口左端的距离
			this.dotTop = 0;
			this.dotLeft = 0;
		},
		moveControl : function (_This) { //拖动滑块控制
			this.oRowDot.addEventListener("mousedown", function (event) {
				_This.rowBarFocus = true;
				_This.colBarFocus = false;
				var event = event || window.event;
				event.preventDefault();
				if (_This.hasRowBar) {
					_This.mouseY = event.pageY - _This.oSmileScrollY - _This.oRowDot.offsetTop;
				};
				_move();
				return false;
			});
			this.oColDot.addEventListener("mousedown", function (event) {
				_This.rowBarFocus = false;
				_This.colBarFocus = true;
				var event = event || window.event;
				event.preventDefault();
				if (_This.hasColBar) {
					_This.mouseX = event.pageX - _This.oSmileScrollX - _This.oColDot.offsetLeft;
				};
				_move();
				return false;
			});
			function _move() {
				document.addEventListener("mousemove", calculate);
				document.addEventListener("mouseup", function (event) {
					var event = event || window.event;
					event.preventDefault();
					document.removeEventListener("mousemove", calculate);
				});
			}
			function calculate(event) {
				if (_This.hasRowBar && _This.rowBarFocus) {
					_This.dotTop = event.pageY - _This.oSmileScrollY - _This.mouseY;
				};
				if (_This.hasColBar && _This.colBarFocus) {
					_This.dotLeft = event.pageX - _This.oSmileScrollY - _This.mouseX;
				};
				_This.limitRange();
			}
		},
		clickControl : function (_This) { //点击滚动条外框定位
			this.oRowBar.addEventListener("click", function (event) {
				_This.rowBarFocus = true;
				_This.colBarFocus = false;
				var event = event || window.event;
				event.preventDefault();
				var mY = event.pageY - _This.oSmileScrollY;
				if (mY<=_This.oRowDot.offsetTop) {
					_This.dotTop -= 60;
				} else if (mY>=_This.oRowDot.offsetTop+_This.oRowDotHeight) {
					_This.dotTop += 60;
				} else {
					return false;
				};
				_This.limitRange();
			});
			this.oColBar.addEventListener("click", function (event) {
				_This.rowBarFocus = false;
				_This.colBarFocus = true;
				var event = event || window.event;
				event.preventDefault();
				var mX = event.pageX - _This.oSmileScrollX;
				if (mX<=_This.oColDot.offsetLeft+_This.oColDotWidth) {
					_This.dotLeft -= 60;
				} else if (mX>=_This.oColDot.offsetLeft+_This.oColDotWidth) {
					_This.dotLeft += 60;
				} else {
					return false;
				};
				_This.limitRange();
			});
		},
		limitRange : function () { //范围限制
			if (this.hasRowBar && this.rowBarFocus) { //纵向
				if (this.dotTop<0) {
					this.dotTop=0;
				};
				if (this.dotTop>this.oRowBarHeight-this.oRowDotHeight) {
					this.dotTop=this.oRowBarHeight-this.oRowDotHeight;
				};
				var contentTop = this.dotTop / this.ratioY;
				if ( this.dotTop>=0 && this.dotTop<=this.oRowBarHeight-this.oRowDotHeight) {
					this.oRowDot.style.top = this.dotTop + "px";
					this.ofirstChild.style.top = - contentTop + "px";
				};
			};
			if (this.hasColBar && this.colBarFocus) { //横向
				if (this.dotLeft<0) {
					this.dotLeft=0;
				};
				if (this.dotLeft>this.oColBarWidth-this.oColDotWidth) {
					this.dotLeft=this.oColBarWidth-this.oColDotWidth;
				};
				var contentLeft = this.dotLeft / this.ratioX;
				if ( this.dotLeft>=0 && this.dotLeft<=this.oColBarWidth-this.oColDotWidth) {
					this.oColDot.style.left = this.dotLeft + "px";
					this.ofirstChild.style.left = - contentLeft + "px";
				};
			}
		},
		wheelControl : function (wheel, _This) { //鼠标滑轮控制
			this.oSmileScroll.addEventListener( wheel , function (event) {
				console.log(_This);
				_This.rowBarFocus = true;
				_This.colBarFocus = false;
				var event = event || window.event;
				_This.wheelRange = event.wheelDelta ? -event.wheelDelta / 120 : ( event.detail || 0 ) / 3;
				_This.dotTop += _This.wheelRange*10;
				_This.limitRange();
			});
		}
	}
	// 将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = smileScroll;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return smileScroll;});
    } else {
        !('smileScroll' in _global) && (_global.smileScroll = smileScroll);
    }
}());