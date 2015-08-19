function initLVT() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban | Long Tran &copy; 2015");
	}

	$(".introText").delay(1500).fadeOut(700);
	$(".introView").delay(1800).slideUp('slow', function() {
		$("introView").show();
		$(".headerCustom").fadeIn(700, function() {
			$("#portfolio").fadeIn();
			$(".container").fadeIn(1000, function() {
				$("footer").fadeIn();		
			});
		});
	});
	$("#eventButton").click(function() {
		$("#portfolio").fadeOut(300);
		$("#events").fadeIn(300);		
	});
	$("#projButton").click(function() {
		$("#events").fadeOut(300);		
		$("#portfolio").fadeIn(300);
	});
}