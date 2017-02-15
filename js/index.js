$("#logo").on("mouseenter", function() {
	$(this).css({
		background: "black"
	});
	$("#logo img").css({
		top: -60 + 'px',
	});
});
$("#logo").on("mouseleave", function() {
	$(this).css({
		background: "white"
	});
	$("#logo img").css({
		top: -3 + 'px',
	});
});
$("#list").on("mouseenter", function() {
	$(this).css({
		background: "black"
	});
	$("#listi").css({
		color: 'white',
	});
});
$("#list").on("mouseleave", function() {
	$(this).css({
		background: "white"
	});
	$("#listi").css({
		color: 'black',
	});
});
//hover事件
//header
var lock1 = true;
$("#list").click(function() {
	if(lock1) {
		lock1 = false;
		$("#floatR").css({
			right: 0,
		});
		$("#header").css({
			left: -250 + 'px',
		});
		$("#home").css({
			left: -250 + 'px',
		});
		$("#headerbg").css({
			left: -250 + 'px',
		});
	} else {
		lock1 = true;
		$("#floatR").css({
			right: -250 + 'px',
		});
		$("#header").css({
			left: 0,
		});
		$("#home").css({
			left: 0,
		});
		$("#headerbg").css({
			left: 0,
		});
	}

});

$(".navigationli").on("mouseenter", function() {
	$(this).find(".ncolor").css({
		width: 250 + 'px',
	});
});
$(".navigationli").on("mouseleave", function() {
	$(this).find(".ncolor").css({
		width: 0 + 'px',
	});
});
$(".navigationli").click(function() {
	lock1 = true;
	$("#floatR").css({
		right: -250 + 'px',
	});
	$("#header").css({
		left: 0,
	});
	$("#home").css({
		left: 0,
	});
	$("#headerbg").css({
		left: 0,
	});
});
//floatR
$("#down").on("mouseenter", function() {
	$(this).css({
		background: 'gray',
	});
	$("#down").find("i").css({
		color: 'white',
	});
});
$("#down").on("mouseleave", function() {
	$(this).css({
		background: '#eee',
	});
	$("#down").find("i").css({
		color: 'gray',
	});
});
//down
var swiper = new Swiper(".swiper-container", {
	pagination: ".swiper-pagination",
	nextButton: ".swiper-button-next",
	prevButton: ".swiper-button-prev",
	paginationClickable: ".swiper-pagination",
	loop: true,
	autoplayDisableOnInteraction: false,
});

//轮播
$("#down").click(function() {
	$("html,body").animate({
		scrollTop: $("#down").offset().top + 'px',
	}, 500)
});
//titlebtn

$.ajax({
	url: "http://127.0.0.1/%E7%9B%9B%E4%B8%96team/php/index.php",
	type: "get",
	dataType: "json",
	success: function(data) {
		function makeShowLi() {
			for(var i = 0; i < data.length; i++) {
				var aLi = $("<li class='showli' ><img src='showimg/" + data[i].img + "'/><ul class='lipart'><li class='partlist1' id='uplist1'><div class='upcontent'><i class='fa fa-plus-square-o'></i>VISITE SITE</div><div class='whitebg'></div></li><li class='partlist1' id='uplist2'><div class='upcontent'><i class='fa fa-link'></i>DETAILS</div><div class='whitebg'></div></li><li class='partlist3' color='" + data[i].color + "'><p class='upp'>" + data[i].pEng + "</p><p class='upp2'>" + data[i].pCHN + "</p></li></ul></li>");
				$("#showbox").append(aLi);
			}
		}
		makeShowLi();
		//showli 创建
		$(".slbl").on("click", function() {
			$("#showbox").html("");
			var showArr = [];
			for(var i = 0; i < data.length; i++) {
				var str = data[i].type;
				var reg = "/" + $(this).attr("id") + "/";
				var reg1 = eval(reg);
				var result = reg1.test(str);
				if(result == true) {
					showArr.push(data[i]);
				}
			}
			for(var i = 0; i < showArr.length; i++) {
				var aLi = $("<li class='showli' ><img src='showimg/" + showArr[i].img + "'/><ul class='lipart'><li class='partlist1' id='uplist1'><div class='upcontent'><i class='fa fa-plus-square-o'></i>VISITE SITE</div><div class='whitebg'></div></li><li class='partlist1' id='uplist2'><div class='upcontent'><i class='fa fa-link'></i>DETAILS</div><div class='whitebg'></div></li><li class='partlist3' color='" + showArr[i].color + "'><p class='upp'>" + showArr[i].pEng + "</p><p class='upp2'>" + showArr[i].pCHN + "</p></li></ul></li>");
				$("#showbox").append(aLi);
			}
			responseMove(showArr);
			moveEnterLeave();
		});
		$("#slbl1").on("click", function() {
			$("#showbox").html("");
			makeShowLi();
			responseMove(data);
			moveEnterLeave();
		});
		//showlist点击事件函数

		function responseMove(data) {
			if($(window).width() < 768 && $(window).width() > 480) {
				showMove(data.length, 2);
			} else if($(window).width() >= 768 && $(window).width() < 1000) {
				showMove(data.length, 3);
			} else if($(window).width() <= 480) {
				showMove(data.length, 1);
			} else {
				showMove(data.length, 4);
			}

			window.onresize = function() {
				if($(window).width() < 768 && $(window).width() > 480) {
					showMove(data.length, 2);
				} else if($(window).width() >= 768 && $(window).width() < 1000) {
					showMove(data.length, 3);
				} else if($(window).width() <= 480) {
					showMove(data.length, 1);
				} else {
					showMove(data.length, 4);
				}
			}
		}
		responseMove(data);
		function moveEnterLeave(){
			$(".showli").on("mouseenter", function() {
			$(this).find("img").css({
				transform: "scale(1.1,1.1)",
			});
			$(this).find("#uplist1").css({
				top: "-92px",
			});
			$(this).find("#uplist2").css({
				top: "-46px",
			});
			$(this).find(".partlist3").css({
				background: $(this).find(".partlist3").attr("color"),
				color: "white",
			});
		});
		$(".showli").on("mouseleave", function() {
			$(this).find("img").css({
				transform: "scale(1,1)",
			});
			$(this).find("#uplist1").css({
				top: "0px",
			});
			$(this).find("#uplist2").css({
				top: "0px",
			});
			$(this).find(".partlist3").css({
				background: "white",
				color: "black",
			});
		});

		$(".partlist1").on("mouseenter", function() {
			$(this).find(".whitebg").css({
				opacity: 1,
			});
		});
		$(".partlist1").on("mouseleave", function() {
			$(this).find(".whitebg").css({
				opacity: 0.6,
			});
		});
		//showli hover 事件
		$(".slbl").on("mouseenter", function() {
			$(this).css({
				color: "white",
			});
		});
		$(".slbl").on("mouseleave", function() {
			$(this).css({
				color: "#ccc",
			});
		});
		//showlist hover
		}
		moveEnterLeave();
	}
});

function showMove(length, x) {
	var num = -1;
	for(var i = 0; i < length; i++) {
		//		console.log($(".showli")[0].offsetWidth);
		var liw = $(".showli")[0].offsetWidth;
		$(".showli")[i].style.height = liw * 0.8 + "px";
		var lih = $(".showli")[0].offsetHeight;
		$(".showli")[i].style.left = liw * (i % x) + "px";
		if(i % x == 0) {
			num++;
		}
		$(".showli")[i].style.top = lih * num + "px";
		$(".lipart")[i].style.height = $(".showli")[i].offsetHeight - $("#showbox img")[i].offsetHeight + "px";
	}
	$("#showbox")[0].style.height = (num + 1) * lih + "px";
	//	console.log($("#showbox img")[0].offsetHeight);

}

$("#our-partner a").on("mouseenter", function() {
	$("#our-partner a").css({
		borderRadius: "30px",
		background: "white",
		color: "black"
	});
});
$("#our-partner a").on("mouseleave", function() {
	$("#our-partner a").css({
		borderRadius: "0px",
		background: "none",
		color: "white"
	});
});
//partner a hover