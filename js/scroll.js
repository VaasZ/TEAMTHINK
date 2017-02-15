function getScrollXY(){
var x,y;
if(document.body.scrollTop){ 
x=document.body.scrollLeft;
y=document.body.scrollTop;
}
else{
x=document.documentElement.scrollLeft;
y=document.documentElement.scrollTop;
}
return {x:x,y:y};
}
//scrolltop 兼容
function scrollAnimate(){
	var sTop =getScrollXY().y;
	var SH = $("#home")[0].offsetHeight;
//	console.log(sTop);
//	console.log(getScrollXY().y);
	if(sTop < SH){
		$("#title").find("span:eq(0)").attr("id","span1");
		$("#title").find("span:eq(1)").attr("id","span2");
		$("#title").find("span:eq(2)").attr("id","span3");
		$("#title").find("span:eq(3)").attr("id","span4");
	}
	if (sTop > 0 && sTop < $(".swiper-container")[0].offsetTop) {
		$("#aboutus h2").attr("class","animateh2");
		$("#aboutus h1").attr("class","animateh1");
	}
	if (sTop > $("#aboutus")[0].offsetTop && sTop < $("#our-works")[0].offsetTop) {
		$("#our-concept h2").attr("class","animateh2");
		$("#our-concept h1").attr("class","animateh1");
		$("#our-concept div").find("span:eq(0)").attr("id","ourspan1");
		$("#our-concept div").find("span:eq(1)").attr("id","ourspan2");
	}
	if (sTop > $("#aboutus")[0].offsetTop +$("#our-concept")[0].offsetHeight && $("#our-works")[0].offsetTop+$("#our-works")[0].offsetHeight) {
		$("#our-works h2").attr("class","animateh2");
		$("#our-works h1").attr("class","animateh1");
	}
	if(sTop > ($("#show")[0].offsetTop+$("#show")[0].offsetHeight*0.5) && sTop < $("#serviceprocess")[0].offsetHeight+$("#serviceprocess")[0].offsetTop){
		$("#serviceprocess h2").attr("class","animateh2");
		$("#serviceprocess h1").attr("class","animateh1");
		$(".spli").css({
			transform:"translateY(0px)",
			opacity:1
		});
	}
	if (sTop >($("#serviceprocess")[0].offsetTop-$("#show")[0].offsetHeight*0.3) &&  sTop < $("#contactus")[0].offsetHeight+$("#contactus")[0].offsetTop) {
		$("#contactus h2").attr("class","animateh2");
		$("#contactus h1").attr("class","animateh1");
		$(".contact-li").css({
			transform:"translateY(0)",
			opacity:1
		});
	}
}
scrollAnimate();
$(window).on("scroll",function(){
		var num1 = $(".swiper-container").offset().top;
		var num2 = $(this).scrollTop();
		$(".swiper-slide img").css({
			top:num2-num1 + 'px',
		});
		var num3 = $("#our-partner").offset().top;
		$("#our-partner img").css({
			top:num2-num3 + 'px',
		});
		var num4 = $("#footer").offset().top;
		var num5 = $("#home")[0].offsetHeight-$("#footer")[0].offsetHeight;
		$("#footer-content").css({
			top:num2+num5-num4 +"px",
		});
		scrollAnimate();
	});