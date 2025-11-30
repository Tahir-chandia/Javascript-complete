let container = document.querySelector(".container")

// container.childNodes.forEach((elem)=>{
//     elem.addEventListener("click",()=>{
//         console.log(elem.innerText);
        
//     });
// })


container.addEventListener("click",function(event){
    let target = event.target
    if(target.className === "box"){
        console.log(target.textContent);
        
    }
})