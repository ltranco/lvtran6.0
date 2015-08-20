function initLVT() {
	var keepThisOffset = -1;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban | Long Tran &copy; 2015");
	}
	$(".introText").delay(1500).fadeOut(700);
	$(".introView").delay(1800).slideUp('slow', function() {
		$("introView").slideDown();
		$(".headerCustom").slideDown('slow', function() {
			$(".container").slideDown('slow', function() {
				$("footer").fadeIn();		
			});
		});
	});
	$("#eventButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		$("#portfolio").fadeOut(300);
		$("#resume").fadeOut(300);		
		$("#events").fadeIn(300);
	});
	$("#projButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		$("#events").fadeOut(300);		
		$("#resume").fadeOut(300);
		$("#portfolio").fadeIn(300);
	});
	$("#resumeButton").click(function() {
		if(keepThisOffset == -1) {
			keepThisOffset = $(this).offset().top - 30;
			$('html,body').animate({scrollTop: keepThisOffset}, 200);
		}
		$("#events").fadeOut(300);		
		$("#portfolio").fadeOut(300);
		$("#resume").fadeIn(300);
	});

	var $window = $(window), $stickyEl = $('.control'), elTop = $stickyEl.offset().top, inTop = $("#intro").offset().top;
    $window.scroll(function() {
    	if($window.scrollTop() == 0) {
    		keepThisOffset = -1;
    	}
        $stickyEl.toggleClass('stickyControl', $window.scrollTop() > elTop);
    });
}