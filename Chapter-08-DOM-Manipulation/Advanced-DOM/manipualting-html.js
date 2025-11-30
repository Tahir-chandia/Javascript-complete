//3.Changing the HTML (Manipulating the HTML):

//Properties:

//1.tagName (read only): Returns the tag name (like "DIV", "H1") of the element in UPPERCASE. (include hidden elements)


// let a = document.querySelector("h1")
// let b = document.querySelector("h2")
// console.log(a.tagName);
// console.log(b.tagName);

/*2.nodeName (read only): Returns the name of the node in UPPERCASE for element nodes (e.g., "DIV", "SPAN") and special strings for other types (e.g.,
"#text" for text nodes, "#comment" for comment nodes).(includes hidden elements and works on any node type, not just HTML elements)*/

/*
let a = document.querySelector("h1")
let b = document.querySelector("h2")
console.log(a.nodeName);
console.log(b.nodeName);
*/

//3.innerText: Returns all the text of the element and its children. (It respects styles like display: none or visibility: hidden, so hidden elements are ignored.)

/*
let a = document.querySelector("h1")
let b = document.querySelector("h2")
console.log(a.innerText);
console.log(b.innerText);
*/


// 4.innerHTML: Returns the HTML content (including any tags inside) as a string. (include hidden elements)

/*
let a = document.querySelector("h1")
let b = document.querySelector("h2")
console.log(a.innerHTML);
console.log(b.innerHTML);
*/

//5.textContent: Returns all the text of the element and its children (include hidden elements).

/*
let a = document.querySelector("h1")
let b = document.querySelector("h2")
console.log(a.textContent);
console.log(b.textContent);
*/
