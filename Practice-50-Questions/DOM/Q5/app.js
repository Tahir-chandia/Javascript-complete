let input = document.querySelector("#password")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
    let type = input.type
    input.type = type === "password"?"text":"password"


    button.innerHTML = input.type === "password"?"Show":"Hide"
})