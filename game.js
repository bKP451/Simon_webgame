var userClickedPattern = [];
var gamePattern = [];
var level = 0;
const buttonColours = ["red", "blue", "green", "yellow"];
// variable started to toggle to false and stops execution
var started = true;

function nextSequence(){
    // generation of random number between 0 and 3
    var randomNumber = Math.floor(Math.random()*4);
    // on first key press this block is executed
    while(started){
        $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        playMusic(randomChosenColour);
        started = false;
        }
    $('h1').text('Level '+ level);
    return randomNumber;
}


// selection of random color from buttonColours Array
var randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);

gamePattern.push(randomChosenColour);

 


function playMusic(colorMusic){
    fileName = 'sounds/'+colorMusic+'.mp3';
    var audio = new Audio(fileName);
    audio.play(); 
    console.log(fileName);
}



// this block of code should be executed for a single time
$(document).keypress(function(){
        // animate a flash to the button
        nextSequence();
        // console.log("hi");
        
    })

// JS

// console.log(document.querySelectorAll('.btn').length);

// for(var i =0; i< document.querySelectorAll('.btn').length; i++){
//     document.querySelectorAll('.btn')[i].addEventListener('click', function(){
//         console.log(this);
//         userClickedPattern.push(this.id);
//         console.log(userClickedPattern);
//     })
//     ;
// }

// now I will do the above using jQuery
$('.btn').click(function(){
    // console.log($(this).attr('id'));
    var buttonColor = $(this).attr('id');
    userClickedPattern.push(buttonColor);
    playMusic(buttonColor);
    console.log(userClickedPattern);
    animatePress(buttonColor);
    setTimeout(function() {
            $('#'+ buttonColor).removeClass('pressed');
    }, 100);
})


// I shall add animation and remove to user Click

function animatePress(currentColour){
    var currentButton = $('#'+currentColour);
    currentButton.addClass('pressed');
}

