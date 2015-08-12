///////////////////////////////////////////////
///											///	
///				页面滑动					///
///											///
///////////////////////////////////////////////

function Swipe (container) {
	var swipe = {};
	//获取第一个元素 ul
	var u_ele = container.find(":first");
	//li的数量
	var slides = u_ele.find("li");
	//容器尺寸
	var c_width = container.width();
	var c_height = container.height();
	//设置ul的尺寸
	u_ele.css({
		width: (slides.length * c_width) + "px",
		height: c_height + "px"
	});
	//设置每个li的尺寸
	$.each(slides, function(index) {
		var slide = slides.eq(index);
		slide.css({
			width: c_width + "px",
			height: c_height + "px"
		});
	});
	//监控完成和移动
	swipe.scrollTo = function(x, speed) {
		//添加transform属性
		u_ele.css({
			'transition-timing-function': 'linear',
			'transition-duration': speed + 'ms',
			'transform': 'translate3d(-' + x + 'px, 0px, 0px)'
		});
		return this;
	}

	return swipe;
}