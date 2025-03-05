var buttonColours = ["red","blue","green",'yellow'];
var gamePattern = [];
var userClickedPattern =[];

var level = 0;

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});



function nextSequence(){

    userClickedPattern = [];
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(randomChosenColour);
    playSound(randomChosenColour)

    level++;
    
}

function playSound(name){
    var pressedAudio = new Audio("./sounds/" + name + ".mp3");
    pressedAudio.play();
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
              nextSequence();  
            },1000);
        }
    }else{
        console.log("wrong");

        // Play wrong sound
        playSound("wrong");
        $(document.body).addClass("game-over");
        setTimeout(function(){
            $(document.body).removeClass("game-over");
        },300);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();q
    }

}

function startOver(){
    level = 0;
    gamePattern=[];
}

$(document).keypress(function(){
    nextSequence();
    $("h1").text("Level "+level);
})





