let body = document.querySelector("body")
let colorInput = document.querySelector("#input")
let randomBtn = document.querySelector(".random")
let applyBtn = document.querySelector(".apply")
let span = document.querySelector("span")


let colorArray = ["red","blue","cyan","yellow"]


const generateColor = ()=>{
let color = Math.floor(Math.random()* colorArray.length)
return colorArray[color]
}

const applyColorVlaue = (color)=>{
  body.style.backgroundColor = color
  span.innerText = color
}

const  randomColor = ()=>{  
let color = generateColor()
applyColorVlaue(color)
}

const applyColor = ()=>{
let color = colorInput.value
applyColorVlaue(color)
}
applyBtn.addEventListener("click",applyColor)

randomBtn.addEventListener("click",randomColor)