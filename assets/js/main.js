/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                           *
 *****************************************************
 */
$(window).on("load", function () {
  "use strict";

  var preloader = $(".spinner-wrapper");
  var firstdatepicker = $("#datepicker-13");
  var seconddatepicker = $("#datepicker-14");
  var fancybox = $(".fancybox");
  var accordion = $("#accordion");
  var progressbar = $(".progress-bar");
  var toggletooltip = $('[data-toggle="tooltip"]');
  var searchpopup = $(".serach-popup-box");
  var addClassess = $("#addClass");
  var removeClasses = $("#removeClass");
  var animatedPopup = $("#qnimate");

  /*
    ========================================
    Preloder Setting
    ========================================
    */
  if (preloader.length) {
    preloader.fadeOut();
  }

  /*
    ========================================
    Datepicker Setting
    ========================================
    */

  if (firstdatepicker.length) {
    firstdatepicker.datepicker();
  }

  if (seconddatepicker.length) {
    seconddatepicker.datepicker();
  }

  /*
    ========================================
    FANCYBOX Setting
    ========================================
    */

  if (fancybox.length) {
    fancybox.fancybox();
  }

  /*
    ========================================
    Accordion Setting
    ========================================
    */

  if (accordion.length) {
    accordion.accordion();
  }

  /*
    ========================================
    PROGRESS BAR JS
    ========================================
    */

  if (progressbar.length) {
    progressbar.each(function () {
      var each_bar_width = $(this).attr("aria-valuenow");
      $(this).width(each_bar_width + "%");
    });

    toggletooltip
      .tooltip({
        trigger: "manual",
      })
      .tooltip("show");
  }
  /*
    ========================================
    Search Popup Setting
    ========================================
    */

  if (searchpopup.length) {
    $(function () {
      addClassess.on("click", function () {
        animatedPopup.addClass("popup-box-on");
      });

      removeClasses.on("click", function () {
        animatedPopup.removeClass("popup-box-on");
      });
    });
  }
  /*
    ========================================
    Owl Carousel Setting
    ========================================
    */

  owlCarouselInit();

  /*
    ========================================
    COUNTDOWN FUNCTION CALLING
    ========================================
    */
  Countdown();

  /*
    ========================================
    MAP INITIALIZATION FUNCTION CALLING
    ========================================
    */
  initMap();
});

/*
========================================
Owl Carousel functions
======================================== 	
*/
function owlCarouselInit() {
  "use strict";

  var mainslider = $("#banner");
  var trainersslider = $("#trainers");
  var partnersslider = $("#partners");
  var nextNav = '<span class="arrows-move-right"></span>';
  var prevNav = '<span class="arrows-move-left"></span>';

  if (mainslider.length) {
    mainslider.owlCarousel({
      loop: true,
      margin: 0,
      dot: true,
      autoplay: true,
      nav: true,
      navText: [prevNav, nextNav],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  if (trainersslider.length) {
    trainersslider.owlCarousel({
      loop: true,
      margin: 0,
      dot: true,
      nav: true,
      autoplay: true,
      navText: [prevNav, nextNav],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }

  if (partnersslider.length) {
    partnersslider.owlCarousel({
      loop: true,
      margin: 0,
      dot: true,
      autoplay: true,
      nav: true,
      navText: [prevNav, nextNav],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
}

/*
========================================
CONTACT PAG MAP
========================================
*/

function initMap() {
  "use strict";

  var mapDiv = $("#gmap_canvas");

  if (mapDiv.length) {
    var myOptions = {
      zoom: 10,
      scrollwheel: false,
      center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
      document.getElementById("gmap_canvas"),
      myOptions
    );
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
    });
    var infowindow = new google.maps.InfoWindow({
      content:
        "<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>",
    });
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    infowindow.open(map, marker);
  }
}

/*
========================================
COUNTDOWN TIMER Setting
========================================
*/
function Countdown() {
  "use strict";

  var demoCountdown = $("#demo");

  if (demoCountdown.length) {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        "<div class='col-md-3 col-sm-3 col-xs-3 com-pad0 text-center'><div class='timer'>" +
        days +
        "</div><span>days</span></div><div class='col-md-3 col-sm-3 col-xs-3 com-pad0 text-center'><div class='timer'> " +
        hours +
        "</div><span>hours</span></div><div class='col-md-3 col-sm-3 col-xs-3 com-pad0 text-center'><div class='timer'>" +
        minutes +
        "</div><span>minutes</span></div><div class='col-md-3 col-sm-3 col-xs-3 com-pad0 text-center'><div class='timer'> " +
        seconds +
        "</div><span>seconds</span></div> ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}

/*
========================================
Dropdown menu
========================================
*/

$(".dropdown-menu li a").click(function () {
  $(".btn span:first-child").html($(this).text());
});
