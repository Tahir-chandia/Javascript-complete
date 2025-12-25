// 31. How can you update the DOM based on user input in real-time (e.g., live preview of a 
// form)?

let name = document.querySelector(".nameInput")
let email = document.querySelector(".emailInput")
let password = document.querySelector(".passwordInput")
let namePreview = document.querySelector(".nameSpan")
let emailPreview = document.querySelector(".emailSpan")
let passwordPreveiw = document.querySelector(".passwordSpan")


name.addEventListener("input",(event)=>{
namePreview.innerHTML= event.target.value;    
})

email.addEventListener("input",(event)=>{
emailPreview.innerHTML= event.target.value;    
})

password.addEventListener("input",(event)=>{
 passwordPreveiw.innerHTML= event.target.value;    
})