function initLVT() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban | Long Tran &copy; 2015");
	}
	$("body").animate({opacity: 1}, 1500);
	$(".headerCustom").hide();
	$(".container").hide();
	$("#events").hide()
	$("footer").hide();
	$(".introText").delay(3000).fadeOut(700);
	$(".introView").delay(3000).slideUp('slow', function() {
		$(".headerCustom").fadeIn(700, function() {
			$(".container").fadeIn(1000, function() {
				$("footer").fadeIn();		
			});
		});
	});
	$("#eventButton").click(function() {
		$("#portfolio").fadeOut(200);
		$("#events").fadeIn(200);		
	});
	$("#projButton").click(function() {
		$("#portfolio").fadeIn(200);
		$("#events").fadeOut(200);		
	});
}