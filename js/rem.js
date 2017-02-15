var width = document.documentElement.clientWidth;
var font_size = width / 640 * 20;
$("html").css("fontSize", font_size + "px");
$(window).on("resize", function() {
		width = document.documentElement.clientWidth;
		font_size = width / 640 * 20;
		$("html").css("fontSize", font_size + "px");
});