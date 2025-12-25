// 32. How would you handle form validation in real time and show error messages 
// dynamically?


let name = document.querySelector(".nameInput")
let email = document.querySelector(".emailInput")
let password = document.querySelector(".passwordInput")
let nameError = document.querySelector(".nameError")
let emailError = document.querySelector(".emailError")
let passwordError = document.querySelector(".passwordError")


name.addEventListener("input",(event)=>{
let nameVal = event.target.value
if(nameVal.length<4){
    nameError.innerHTML = "Characters must be greater than 4 🔴"
    nameError.style.color = "red"
}else{ 
    nameError.innerHTML = "This is suitable for account ✅"
    nameError.style.color = "green"
}
}
)

email.addEventListener("input",(event)=>{
    let emailVal = event.target.value;
    if( emailVal.includes("@") || emailVal.includes(".") ){
        emailError.innerHTML = "This is suitable for account ✅"
        emailError.style.color = "green"
        
    }else{
        
        emailError.style.color = "red"
        emailError.innerHTML = "Invalid email: Please include @  for email validation"
}
})

password.addEventListener("input",(event)=>{
    let passwordVal = event.target.value
if(passwordVal.length<6){
passwordError.innerHTML = "Characters must be greater than 6 🔴"
passwordError.style.color = "red"
}
else{
    passwordError.innerHTML = "This is suitable for account ✅"
    passwordError.style.color = "green"
}
}
)

