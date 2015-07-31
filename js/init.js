function initLVT() {
	$("body").animate({opacity: 0});
	$("body").animate({opacity: 1}, 1500);
	$("#events").hide();

	$("#eventButton").click(function() {
		$("#portfolio").hide(400);
		$("#events").show(400);		
	});

	$("#projButton").click(function() {
		$("#portfolio").show(400);
		$("#events").hide(400);		
	});
}
