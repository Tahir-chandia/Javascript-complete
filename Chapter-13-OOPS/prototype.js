// Javascript prototype based language h. prototype ki madad se hum memory efficient code likh sakte hain constructor function ki madad se jis me hame method ko prototype me set krna hota h.
//Constructor function:

// function Student(name,age){
//     this.name = name,
//     this.age = age
// }

// Student.prototype.introduce = function(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`);
// }
// let s1 = new Student("Tahir",24)
// let s2 = new Student("Shahid",22)
// console.log(s1);
// s1.introduce()
// console.log(s2);
// s2.introduce()


//Class Syntax(ES6):
//ye aik syntactic sugar h jo constructor function ki trha hi kaam krta h but is me prototype alag se nahi set krne prte.

class Student{
    constructor(name,age){

        this.name = name;
        this.age = age;
    }
    intro(){
        console.log(`My name is ${name} and my age is ${age}`);
        
    }
}

let s1 = new Student("Tahir",25)
let s2 = new Student("Shahid",20)
// s1.intro()
console.log(s1);
// s2.intro()
console.log(s2);


