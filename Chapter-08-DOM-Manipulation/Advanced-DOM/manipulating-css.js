// Changing the Style (Manipulating the CSS):

// 1. Using attribute method
let select = document.querySelector("div")

// select.setAttribute("class","div")
// select.setAttribute("style",'background-color: red')

// 2. Using style

// select.style.backgroundColor ="blue"


// 3. Using cssText property

// select.style.cssText = "background-color:red; color:blue"

// 4. Using className property

// select.className ="div"

// 5. Using clasList property : add(), remove(), toggle(), contains()

// select.classList.add("box")
// console.log(select.className)
// select.classList.add("box2")
// console.log(select.className)
// select.classList.remove("box2")
// console.log(select.className)
// select.classList.toggle("box2")
// console.log(select.className)
// select.classList.toggle("box2")
// console.log(select.className)
// let contains = select.classList.contains("box2")
// let contains1 = select.classList.contains("box")
// console.log(contains,contains1);
