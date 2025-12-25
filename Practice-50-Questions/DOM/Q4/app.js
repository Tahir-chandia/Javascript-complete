// 34. How would you toggle a class on an element when another element is clicked (e.g., 
// show/hide sidebar)?


let toggle = document.querySelector("button")
let slider = document.querySelector(".slider")
toggle.addEventListener("click",()=>{
    
    slider.classList.toggle("showslider")
})