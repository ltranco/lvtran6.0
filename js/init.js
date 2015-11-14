var parts = ["#events", "#resume", "#portfolio"];
var quotes = ["\"Musicians play their instruments. I play the orchestra.\" - <a target='blank' href='http://www.wsj.com/articles/apple-co-founders-allies-take-aim-at-hollywood-over-steve-jobs-1444000308'>The 'opportunistic Steve Jobs movie'</a>",
			"\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban"];
var index = 0;

function initLVT() {
	var cb = function() {
		var l1 = document.createElement('link'); 
		l1.rel = 'stylesheet';
		l1.href = 'css/materialize.min.css';
		var l2 = document.createElement('link'); 
		l2.rel = 'stylesheet';
		l2.href = 'css/style.css';
		var h = document.getElementsByTagName('head')[0];
		h.insertBefore(l1, null);
		h.insertBefore(l2, null);
     };
	var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
	if (raf) raf(cb);
	else window.addEventListener('load', cb);

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
 		$("footer").html("<p>\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban<br>Long Tran &copy; 2015");
 		$(".control").html('<a id="resumeButton" class="btn-floating btn-small"><i class="material-icons">assignment</i></a><a id="portfolioButton" class="btn-floating btn-small"><i class="material-icons">code</i></a><a id="eventsButton" class="btn-floating btn-small"><i class="material-icons">flight_takeoff</i></a>');
	}
	else {
		setInterval(changeQuote, 10000);
	}
	$(".introText").delay(1500).fadeOut(700);
	$(".introView").delay(1800).slideUp('fast', function() {
		$(".headerCustom").slideDown('fast', function() {
			$(".container").slideDown('fast', function() {
				$("footer").fadeIn();		
			});
		});
	});

	$("#eventsButton").click(function() {
		clickHandler("#events");
	});

	$("#portfolioButton").click(function() {
		clickHandler("#portfolio");
	});

	$("#resumeButton").click(function() {
		clickHandler("#resume");
	});

	$(".freelance-proj-email-button").click(function() {
		input_email = $(".freelance-proj-email-field").val();
		if(input_email) {
			email = "email=" + input_email
			$.ajax({
				url:"http://ltran.co/js/email.php",
				type: "POST",
				data: email,
		      	success: function(data) {
		         	setTimeout(function() {
		         			$(".freelance-proj-email-button").val("&#10004;");
		         		}, 1000)
		         	);
					$(".freelance-proj-email-button").val("Get Sample");
					$(".freelance-proj-email-field").val("");
		      	},
		      	error: function(data) {
		         	console.log("fail");
		      	}
			});
		}
	});
}

function changeQuote() {
	if(index == quotes.length) {
		index = 0;
	}
	$("#quotes").html(quotes[index++]);
}

function clickHandler(q) {
	if($(q).is(":visible")) {
		$(q).slideUp(100);
		$(q + "Button").css("backgroundColor", "black");
	}
	else {
		keepThisOffset = $(q+"Button").offset().top - 18;
		$('html,body').animate({scrollTop: keepThisOffset}, 200);
		$(q + "Button").css("backgroundColor", "#ff3232");
		fade(q);
	}
}

function fade(q, n) {
	if(!n) {
		n = 250;
	}
	for(var i = 0; i < parts.length; i++) {
		if(parts[i] == q) {
			$(parts[i]).fadeIn(n);
			$(q + "Button").css("backgroundColor", "#ff3232");
		}
		else {
			$(parts[i]).fadeOut(n);
			$(parts[i] + "Button").css("backgroundColor", "black");
		}
	}
}
