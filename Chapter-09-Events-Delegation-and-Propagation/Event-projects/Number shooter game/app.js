let timeValue = document.querySelector(".timeValue")
let mainContainer = document.querySelector(".mainContainer")
let smallContainer = document.querySelector(".smallContainer")
let body = document.querySelector("body")
let restartBtn = document.querySelector(".restartBtn")
let gameOver = document.querySelector(".gameOverContainer")
let targetValue = document.querySelector(".targetValue")
let num = 53
let timer = 10
let starting = document.querySelector(".startingContainer")
let startBtn = document.querySelector("button")
let scoreValue = document.querySelector(".scoreValue")
let finalScore  = document.querySelector(".finalScoreValue")
let target
function numbers(){
    for(let i=1;i<=num;i++ ){
        let div = document.createElement("div")
        div.classList.add("box")
        let content = Number(Math.ceil(Math.random()*10))
        div.innerHTML = `${content}`
        mainContainer.append(div)
    }
}
function startGame(){
    numbers()
    starting.style.display= "none"
    mainContainer.style.visibility= "visible";
    countDownTimer()
}

function countDownTimer(){
    timeValue.innerHTML     = 60
    timer = timeValue.innerHTML
    let intervalId = setInterval(() => {
        timer--
        if(timer < 0){
            return 
        }
        timeValue.innerHTML = timer
        if(timer ==0){
            console.log("hlo");
            mainContainer.style.visibility = "hidden" 
            gameOver.style.visibility = "visible"
            mainContainer.innerHTML = gameOver
            return mainContainer;
        }
    }, 1000);

  setTimeout(()=>{

      clearInterval(intervalId)
  },61000)  
}

function againStart(){
   mainContainer.innerHTML = ""
    numbers()

    mainContainer.style.visibility = "visible" 
gameOver.style.visibility = "hidden"
scoreValue.innerHTML = Number("00")
finalScore.innerHTML = Number("00")
countDownTimer()
target.innerHTML = ""
     generateTarget()
}

function generateTarget(){
    target = Number(Math.ceil(Math.random()*10))  
    targetValue.innerHTML  = target
}


generateTarget()

mainContainer.addEventListener("click",function(event){
if(event.target.className === "box"){
    let targetElem = Number(event.target.innerText)
    let sv

    if(target ===targetElem){
        
        mainContainer.innerHTML = ""
        numbers()
        if(event){
            event.target.style.backgroundColor = "blue";
        }
        


     sv = Number(scoreValue.innerHTML)
     sv += 10
     scoreValue.innerHTML = sv
     
     finalScore.innerHTML = sv
     target.innerHTML = ""
     generateTarget()
    }else{   
         mainContainer.innerHTML = ""
        numbers()
         sv = Number(scoreValue.innerHTML)
      sv -=5 
    scoreValue.innerHTML = sv
    finalScore.innerHTML = sv

    target.innerHTML = ""
     generateTarget()
}    
}})

startBtn.addEventListener("click",startGame)
restartBtn.addEventListener("click",againStart)
