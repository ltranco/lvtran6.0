var quotes = ["\"Musicians play their instruments. I play the orchestra.\" - <a target='blank' href='http://www.wsj.com/articles/apple-co-founders-allies-take-aim-at-hollywood-over-steve-jobs-1444000308'>The 'opportunistic Steve Jobs movie'</a>",
            "\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban"];
var index = 0;

function changeQuote() {
    if(index == quotes.length) {
        index = 0;
    }
    $("#quotes").html(quotes[index++]);
}

$(document).ready(function() { 
    var owl = $("#reading-list");
    owl.owlCarousel({
      navigation : true,
      pagination: true,
      singleItem:true
    });

    var dur = 300;
    $(".down-here").click(function() {
        $("html,body").animate({
          scrollTop: $(".concept-statement").offset().top + 100
        }, dur);
    });
    
    $("h1").animate({color:"#ffffff"}, dur);
    $("h3").animate({color:"#ffffff"}, dur);
    $("header").animate({backgroundColor:"#131314"}, 0);
    $('.concept-statement').waypoint(function(direction) {
        if (direction == "up") {
            $("h1").animate({color:"#ffffff"}, {duration:dur, queue:false});
            $("body").animate({ backgroundColor: "#131314" }, {duration:dur, queue:false});
            $("h3").animate({color:"#ffffff"}, {duration:dur, queue:false});
            $("header").animate({backgroundColor:"#131314"}, {duration:dur, queue:false});
        }
        else if (direction == "down") {
            $("h1").animate({color:"#131314"}, {duration:dur, queue:false});
            $("body").animate({ backgroundColor: "#ffffff" }, {duration:dur, queue:false});
            $("h3").animate({color:"#131314"}, {duration:dur, queue:false});
            $("header").animate({backgroundColor:"#ffffff"}, {duration:dur, queue:false});
        }
    },
    {
        offset: function() {
            return 0;
        }
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#kickass").hide();
    }

    $(".freelance-proj-email-button").click(function() {
        console.log("test");
        input_email = $(".freelance-proj-email-field").val();
        if(input_email) {
            email = "email=" + input_email;
            $(".freelance-proj-email-button").val("Sent!");
            $(".freelance-proj-email-field").val("");
            $.ajax({
                url:"http://ltran.co/js/email.php",
                type: "POST",
                data: email,
                success: function(data) {
                    $(".freelance-proj-email-button").val("Get Sample");
                },
                error: function(data) {
                    $(".freelance-proj-email-button").val("Get Sample");
            }
            });
        }
    });

    setInterval(changeQuote, 10000);
}); 