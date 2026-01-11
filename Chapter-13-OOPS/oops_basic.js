//Basics of oops
/*
let  obj = {name:"Tahir", // object me key value pair ko property bolte hain
    age:25,
    hobby:"Gaming",
    intro:function(){
        console.log(`My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`);
        // object me function ko method bolte hain or this isi object ki properties ko access krne k lye use krte hain. this ka use alag alag hota h is lye yahan arrow function use mat krna
    }
}
*/
// Problem:
// Agr hame aik se ziada user chahiye zara si changing krne k lye to multiple object banae ge..

// Solution:
//Ham Object ka instance bana den ge jis se ham multiple users bna sakte hain...

// Chaar tareekon se object bna sakte h

//1.Object literal:
//Is method se aik waqt me aik object bnta h or ise hum singleton object bhi kehte hain.

/*
let  Obj = {name:"Tahir", 
    age:25,
    hobby:"Gaming",
    intro:function(){
        console.log(`My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`);
      }
}
Obj.intro()
*/

// 2 Factory Function.
// Is method me hum function k ander object banate hain jis wajah se multiple objects aik waqtme bna sakte hain 

/*
function Obj(name,age,hobby){
    return  {name:name, 
    age,
    hobby,
    intro:function(){
        console.log(`My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`);
       }
}
}
let result = Obj("Tahir",22,"abc")
let result2 = Obj("atif",12,"hello")
console.log(result);
console.log(result2);
*/

// Is method me by default Prototype set nahi hota manually set krne hota h... Without class multiple objects banane k lye best h

//3.Constructor function..
//Is method me hum this se object banate h... Jab bhi hum new object banate hain to hume new ka keyword use krna hota h. Automatically sets up a link to Student.prototype.

/*
function Obj(name,age,hobby){
    this.name=name,
    this.age = age,
    this.hobby=hobby
    this.intro= function()
    {
        console.log(`My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`);
        
    }
}
let s1 = new Obj("Tahir",34,"hle")
let s2 = new Obj("Ghani",24,"no way")
console.log(s1);
s1.intro()
console.log(s2);
s2.intro()*/


// 4.Class syntax(Es6)
// latest tareeka object bananay ka jis se multiple instance bna sakte hain is main aik function bhi hota h jo constructor function hota h.

class Student{
    constructor(name,age,hobby){
     this.name=name,
    this.age = age,
    this.hobby=hobby
    console.log("constructor");
    
}
intro= function()
    {
        console.log(`My name is ${this.name} , my age is ${this.age} and my hobby is ${this.hobby}`);
                
    } 
}

let s1 = new Student("Tahir",22,"Gaming")
console.log(s1);
