$(document).ready(function(){
	$("#backtotop").click(function(){
		$("html, body").animate({scrollTop: 0}, "fast");
		return false;	
	});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("backtotop").style.display = "block";
		$("#backtotop").addClass("fadeIn");
	} else {
		document.getElementById("backtotop").style.display = "none";
		$("#backtotop").removeClass("fadein");
	}
}