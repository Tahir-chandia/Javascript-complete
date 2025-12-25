// 33. How do you find the closest ancestor element that matches a selector?

let child = document.querySelector(".child")

child.addEventListener("click",()=>{
    console.log(child.closest(".parent"))
})
