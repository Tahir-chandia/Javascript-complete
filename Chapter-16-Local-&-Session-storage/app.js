// localStorage.setItem("name","Tahir")
// localStorage.setItem("age","25")
// sessionStorage.setItem("name","Tahir khan")
// sessionStorage.setItem("age","25")

// console.log(localStorage.getItem("name"));
// console.log(sessionStorage.getItem("name"));
// console.log(localStorage.getItem("age"));
// console.log(sessionStorage.getItem("age"));
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// console.log(sessionStorage.key(0));
// console.log(sessionStorage.length);
// console.log(localStorage.removeItem("age"));
// console.log(sessionStorage.removeItem("age"));


let users= [1,2,3,4,5,6]
let obj =[
    {id:1,name:"khan"},
    {id:2,name:"Tahir"},
    {id:3,name:"zakir"}
]


let bool = true

localStorage.setItem("users",JSON.stringify(users))
localStorage.setItem("obj",JSON.stringify(obj))
localStorage.setItem("bool","true")
let boolLocal = localStorage.setItem("bool2",bool)
console.log(JSON.parse(localStorage.getItem("bool") ));
console.log(JSON.parse(localStorage.getItem("obj") ));
console.log(JSON.parse(localStorage.getItem("users") ));
