let nav = document.querySelector("div")

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY >200){
        nav.classList.add("stick")
    }else{
        nav.classList.remove("stick")

    }
})