
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started=false;
var level=0;


$("body").keypress(function(){

if(!started){
  $("h1").text("level "+level);
  nextSequence() ;
  started=true;


}

});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);


});



function checkAnswer(currentLevel){

  if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]) {
    console.log("succes");

    if (gamePattern.length===userClickedPattern.length) {

      setTimeout(function () { nextSequence();}, 1000);

       }
  }else{
    console.log("wrong");

    var wrong="wrong";

    playSound(wrong);

     $("body").addClass("game-over");

    setTimeout(function () { 


    $("body").removeClass("game-over");

     },200);

    $("h1").text( "Game Over, Press Any Key to Restart" );

    startOver();

  }


}


function startOver(){

  level=0;
  gamePattern=[];
  started=false;

}

function nextSequence() {

  userClickedPattern=[];

  level++;

  $("h1").text("level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  
}




function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

