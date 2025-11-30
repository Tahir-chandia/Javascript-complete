// Insert Elements (Addition Of Elements):

// Step1: Creation of element

let elem = document.createElement("p")

// Step2: Addion or Deletion of element

//1. node.append(elem) : adds at the end of node (inside)

// let doc = document.querySelector("div")
// doc.append(elem)

// let crete = elem.innerHTML ="para 4"

//2.node.prepend(elem) : adds at the start of node (inside)

// let doc = document.querySelector("div")
// doc.prepend(elem)
// let crete = elem.innerHTML ="para 4"


// 3.node.after(elem) : adds after the node (outside)


// let doc = document.querySelector("div")
// doc.after(elem)
// let crete = elem.innerHTML ="para 4"

//4.node.before(elem) : adds before the node (outside)


// let doc = document.querySelector("div")
// doc.before(elem)
// let crete = elem.innerHTML ="para 4"

// 5.node.inserAdjacentElement(position, elem) : positon can be “beforebegin”, “afterbegin”, “beforeend”, “afterend”


// let doc = document.querySelector("div")
// doc.insertAdjacentElement("beforeend",elem)
// let crete = elem.innerHTML ="para 4"

//Deletion of element
// node.remove()

// let doc = document.querySelector("p")
// doc.remove()

// Parent Node

// node.parentNode: Returns the immediate parent of a node (could be an Element, Document, or DocumentFragment).
/*
let a = document.querySelector("h1")
let b =a.parentNode


//Common Parent Methods

//1.replaceChild(newChild, oldChild): Replaces an existing child node with a neone.

let c = document.createElement("h2")
c.innerHTML = "I am heading"

// b.replaceChild(c,a)

//2.appendChild(child): Adds a child node to the end of the parent's children list
 
// b.appendChild(c)

//3.insertBefore(newNode, referenceNode): Inserts a new node before a specified existing child node.

// b.insertBefore(c,a)
let d = document.querySelector("p")
// 4.removeChild(child): Removes a specified child node from the parent.
b.removeChild(d)*/

/*
Note:
❑ sometimes you see appendChild and removeChild in older
code. (only work with nodes and not with strings like text).*/


// Attributes:

// getAttribute(attr): To get the attribute value
let a = document.querySelector(".cla")

// console.log(a.getAttribute('title'));

// setAttribute(attr, value): To set the attribute value

let classValue = a.getAttribute("class")


 console.log(a.setAttribute("class",`${classValue} random`));

 console.log(a.attributes);
// console.log(a.attributes.class.nodeValue);

