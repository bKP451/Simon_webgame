var userClickedPattern = [];
var gamePattern = [];
var level = 0;
const buttonColours = ["red", "blue", "green", "yellow"];
// variable started to toggle to false and stops execution
var started = true;

function nextSequence(){
    // generation of random number between 0 and 3
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
    playMusic(randomChosenColour);
    console.log(`Game pattern is ${gamePattern}`);
    // on first key press this block is executed
    $('#level-title').text ('level ' + level);
    level += 1;
    
}



// It checks the userClickedPattern and gamePattern 
function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (userClickedPattern.toString() === gamePattern.toString()){
        console.log("success");
        setTimeout(()=>{
            nextSequence();
            userClickedPattern = [];
        }, 1000);
    } else {
        console.log("Failure");
        
    }
}

function playMusic(colorMusic){
    fileName = 'sounds/'+colorMusic+'.mp3';
    var audio = new Audio(fileName);
    audio.play(); 
    console.log(fileName);
}



// this block of code should be executed for a single time
$(document).keypress(function(){
    while(started){
        nextSequence();
        started = false;
    }
});
     
// now I will do the above using jQuery
$('.btn').click(function(){
    // console.log($(this).attr('id'));
    var buttonColor = $(this).attr('id');
    userClickedPattern.push(buttonColor);
    playMusic(buttonColor);
    console.log(`User's click pattern is ${userClickedPattern}`);
    animatePress(buttonColor);
    setTimeout(function() {
            $('#'+ buttonColor).removeClass('pressed');
    }, 100);
    // check whether the user has chosen their answer
    // the length of userClickedPattern and gamePattern should be same
    if(userClickedPattern.length === gamePattern.length) {
        checkAnswer(level)
    }
})


// I shall add animation and remove to user Click

function animatePress(currentColour){
    var currentButton = $('#'+currentColour);
    currentButton.addClass('pressed');
}

