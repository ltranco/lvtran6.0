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

    $("h1").animate({color:"#ffffff"}, 600);
    $("h3").animate({color:"#ffffff"}, 600);
    $("header").animate({backgroundColor:"#131314"}, 0);
    $('.concept-statement').waypoint(function(direction) {
        if (direction == "up") {
            $("h1").animate({color:"#ffffff"}, 600);
            $("body").animate({ backgroundColor: "#131314" }, 600);
            $("h3").animate({color:"#ffffff"}, 600);
            $("header").animate({backgroundColor:"#131314"}, 600);
        }
        else if (direction == "down") { 
            $("h1").animate({color:"#131314"}, 600);
            $("body").animate({ backgroundColor: "#ffffff" }, 600);
            $("h3").animate({color:"#131314"}, 600);
            $("header").animate({backgroundColor:"#ffffff"}, 600);
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