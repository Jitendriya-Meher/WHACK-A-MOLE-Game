
const gameContainer = document.querySelector(".container");
const items = document.querySelectorAll(".item");

console.log(gameContainer,items);

let startGame , startTime , countDown = 20 , score = 0;

const startBtn = document.querySelector(".start");

gameContainer.classList.add("active");

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("active");
    gameContainer.classList.remove("active");
    countDown=20;
    score = 0;
    scoreCount.innerHTML= "0";
    gameStart();
});

const timeCount = document.getElementById("time-counter");
const scoreCount = document.getElementById("score-counter");

gameContainer.addEventListener("click", (e) =>{
    console.log(e.target);
    if( e.target.classList.contains("mole-clickd") ){
        score++;
        scoreCount.innerHTML=score;

        const bushEle = e.target.parentElement.previousElementSibling;

        console.log(bushEle);

       const span = bushEle.querySelector("span");
       span.innerHTML = "Whack";

        setTimeout(() => {
            span.innerHTML="";
        }, 300);
    }
    
})

const gameStart = () =>{

    startTime = setInterval ( () =>{
        timeCount.innerHTML = countDown;
        countDown--;
    },1000);

    startGame = setInterval( ()=>{
        showMole();
    },600);

};

function getRandomValue(){
    return Math.floor(Math.random()*items.length); 
}

function showMole(){

    if( countDown < 0){
        clearInterval(startGame);
        clearInterval(startTime);

        startBtn.classList.remove("active");
        gameContainer.classList.add("active");
    }

    let moleAppear = items[getRandomValue()].querySelector(".mole");
    moleAppear.classList.add("mole-appear");
    hideMole( moleAppear );
}

function hideMole( moleItem){
    setTimeout(() => {
        moleItem.classList.remove("mole-appear");
    }, 1000);
}