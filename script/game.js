

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

function checkAnswer()


$('button').on('click',function(){
    let userChosenColor=$(this).attr('class')
    animatePress(userChosenColor)
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
    playSound()
});

$(document).keydown(()=>{
    if(started){
    let gameStart=new Audio('sounds/game-start-6104.mp3')
    gameStart.play()
    nextSequence()

    started=false
    }

})
