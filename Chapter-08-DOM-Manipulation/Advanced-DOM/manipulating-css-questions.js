// 1. Create a simple website with theme changing functionality

// let select = document.querySelector("button")

// let body = document.querySelector("body")
// let theme = "light"

// select.addEventListener("click",()=>{
//     if(theme == "light"){

//         body.style.backgroundColor="black"
//         body.style.color="white"
//         theme = "dark"
//     }else{
        
//                 body.style.backgroundColor="white"
//                 body.style.color="black"
//                 theme = "light"

//     }
  
// }
// )

// 2. Solve first question by changing css class.

// let select = document.querySelector("button")

// let body = document.querySelector("body")

// select.addEventListener("click",()=>{
//     if(body.className === "light"){
//         body.className = "dark"
//         console.log(body.className);
        
//     }else{
//         body.className = "light"
//         console.log(2);

//     }
  
// }
// )


// 3. Solve the first question by toggle css class.
let select = document.querySelector("button")

let body = document.querySelector("body")


select.addEventListener("click",()=>{
        body.classList.toggle("dark")
}
)