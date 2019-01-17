//处理滑动
var swiper = function() {
	var swiper = new Swiper('#company', {
		slidesPerView: 4.45,
		spaceBetween: 0,
		freeMode: true
	});
};

swiper();

// 导航选择事件
$(".swiper-slide").on("click", function() {
	$(".swiper-slide .triangle").addClass("white");
	$(".swiper-slide .active").removeClass("active");
	$(this).find(".triangle").removeClass("white");
	$(this).find("a").addClass("active");
});

// 时间下拉框
$("select").on("change", function() {
	$(".select").text($(this).val());
});

// 以下都是导航代码
$(document).ready(function() {
	// 导航出现与隐藏事件
	$(".three-bar").on("click", function() {

		if ($(".float_nav").hasClass("collapse")) {
			$(".float_nav").removeClass("collapse");
			$(".mask").removeClass("none");
		} else {
			$(".float_nav").addClass("collapse");
			$(".mask").addClass("none");
		}

	});

	// 遮罩层点击事件
	$(".mask").on("click", function() {
		$(".float_nav").addClass("collapse");
		setTimeout(function() {
			$(".mask").addClass("none");
		}, 200);
	});

	// 退出事件
	$(".exit").on("click", function() {
		$(".float_nav").addClass("collapse");
		setTimeout(function() {
			$(".mask").addClass("none");
		}, 200);
	});

	// 因为使用absolute,要计算让float_nav的高度等于整个页面的高度。不能用fixed，否则会有导航展开被遮住。
	$(".float_nav,.mask").height($("body").height());

	// 导航脚本
	$(".item>div").on("click", function() {
		var _this = $(this);
		var item = _this.parent();
		var map = {
			"first": function() {
				// 收缩
				if (_this.find(".up").length == 1) {
					item.find("[data-nav='second'],[data-nav='third']").hide();
					_this.find(".up").removeClass("up").addClass("down");
					item.find(".up").removeClass("up").addClass("down");
				} else if (_this.find(".down").length == 1) {
					// 展开
					item.find("[data-nav='second']").show();
					_this.find(".down").removeClass("down").addClass("up");
					// 其他一级节点收缩
					item.siblings().each(function(i, ele) {
						var nav = $(ele).find("[data-nav='first']");
						if (nav.find(".up").length == 1) {
							nav.click();
						}
					});
				} else {
					return false;
				}
			},
			"second": function() {
				// 收缩
				if (_this.find(".up").length == 1) {
					item.find("[data-nav='third']").hide();
					_this.find(".up").removeClass("up").addClass("down");
				} else if (_this.find(".down").length == 1) {
					// 展开
					// 当前item内所有三级节点收缩
					item.find("[data-nav='third']").hide();
					// 当前item内二级节点的箭头改成向下
					item.find("[data-nav='second']").find(".up").removeClass("up").addClass("down");
					_this.next().show();
					_this.find(".down").removeClass("down").addClass("up");
				} else {
					return false;
				}
			}
		};
		map[$(this).attr("data-nav")] && map[$(this).attr("data-nav")]();
	});
});