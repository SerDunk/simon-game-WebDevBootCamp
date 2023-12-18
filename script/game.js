

const buttonColors=['red','blue','green','yellow']
let gamePattern=[]
let userClickedPattern=[]
let level=0
let started=true

function nextSequence(){
    $('h1').text('Level '+ level)
    level++
    let randomNumber=Math.floor(4*Math.random())
    let randomChosenColor=buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $('.'+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound()
}

function playSound(){
    let tileAudio=new Audio('sounds/beep-sound-8333.mp3')
    tileAudio.play()
}

function animatePress(currentColor){
    $('.'+currentColor).addClass('pressed')
    setTimeout(()=>{
        $('.'+currentColor).removeClass('pressed')
    },100)
}
function gameEnd(){
    gamePattern=[]
    userClickedPattern=[]
    level=0
    started=true
}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                userClickedPattern = []
                nextSequence();
            }, 1000);

        }

    } else {
        let wrongAudio=new Audio('sounds/wrong-47985.mp3')
        wrongAudio.play()
        $('body').addClass('game-over')
        setTimeout(()=>{
            $('body').removeClass('game-over')
        },200)
        console.log("wrong");
        $('h1').text('Wrong! Press A Button To Start Again')
        gameEnd()

        }
    }



$('button').on('click',function(){
    let userChosenColor=$(this).attr('class')
    animatePress(userChosenColor)
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
    playSound()
    checkAnswer(userClickedPattern.length-1)
});

$(document).keydown(()=>{
    if(started){
    let gameStart=new Audio('sounds/game-start-6104.mp3')
    gameStart.play()
    nextSequence()

    started=false
    }

})
