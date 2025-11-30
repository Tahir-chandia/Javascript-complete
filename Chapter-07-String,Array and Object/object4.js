/*What is singleton object in js?
A singleton is just a single, unique object created once in your code.
Creating an object using literal syntax is considered a singleton because it creates one
specific object instance that is not used as a template to create others.*/

//syntax to singleton object

// let obj = {}
// let my = new  Object({})


// Destructuring of object

let obj = {
    name:"Tahir",
    city : "Karachi",
    age:24
}

let {name,age,city} = obj

console.log(age,name,city);


// Destructuring of array


let arr=[1,"khan",2,{city:"islamabad"}]

let [num,string,num2,obje]=arr

console.log(string,num,num2,obje);
