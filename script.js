var setIntClock;
var setIntStopwatch;

$(".btn").on("click", function() {
  var buttonClicked = $(this).attr("id");
  if(buttonClicked === "clock-button") {
    $("#clock-button").addClass("borderClicked");
    setIntClock = setInterval(myClock, 1000);
  } else {
    $("#clock-button").removeClass("borderClicked");
    clearInterval(setIntClock);
    $("#hours").empty();
    $("#minutes").empty();
    $("#seconds").empty();
  }

  if (buttonClicked === "stopwatch-button") {
    $("#stopwatch-button").addClass("borderClicked");
    $("#refresh-button").addClass("refresher");
    myStopwatch(setIntStopwatch);
  } else if(buttonClicked === "refresh-button") {
    clearInterval(setIntStopwatch);
    myStopwatch(setIntStopwatch);
    $("#hours").empty();
    $("#minutes").empty();
    $("#seconds").empty();
  }
   else {
    clearInterval(setIntStopwatch);
    $("#stopwatch-button").removeClass("borderClicked"); 
    $("#refresh-button").removeClass("refresher");
    $("#hours").empty();
    $("#minutes").empty();
    $("#seconds").empty();
  }

});


function myClock() {
  var setHour = new Date().getHours();
  var setMinutes = new Date().getMinutes();
  var setSeconds = new Date().getSeconds();

    $("#hours").html(("0"+ setHour).slice(-2));
    $("#minutes").html(("0"+ setMinutes).slice(-2));
    $("#seconds").html(("0"+ setSeconds).slice(-2));
}

function myStopwatch() {
  var s = 60;
  var m = 60;
  var h = 24; 

  var countS = 1;
  var countM = 0;
  var countH = 0;

  setIntStopwatch = setInterval(() => {
    
      if (countS < s) {
        $("#seconds").html(("0"+ countS).slice(-2));
        countS++; 
      } if (countS == s) {
        countM++; 
        $("#minutes").html(("0"+ countM).slice(-2));
        countS = 0;
      } if (countM == m) {
        countH++;
        $("#hours").html(("0"+ countH).slice(-2));
        countM = 0;
      } if (countH == h) {
        countS = 0;
        countM = 0;
        countH = 0;
      } 
  }, 1000);
}