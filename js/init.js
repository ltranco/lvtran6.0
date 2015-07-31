function initLVT() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban | Long Tran &copy; 2015");
	}
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
