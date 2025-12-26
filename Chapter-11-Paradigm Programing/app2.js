// 2. Declarative Paradigm. Is me bane banae functions use kr k kam krte h 

// 1.Functional Programming . Is me hum immutability ka khayal krte h or react bhi functional programming pr based krta h is lye ye boht ziada important hota h

/*
let arr = [1,2,3,4,5]
let duplicate = arr.map(elem=>{return elem *2})
console.log(duplicate);
console.log(arr);
*/


// 3. Object-Oriented Programming. 1)Class-based 2)Prototype-based
/*
class Car{
    constructor(name,color){
        this.name = name
        this.color = color   
    }
    start(){
        console.log("Car start...");
    }
    stop(){
        console.log("Car stop....");
    }
}
let car = new Car("Toyotta","red")
console.log(car);
car.start()*/

// 4. Event-Driven Programming Based on event listeners, callbacks, DOM events, etc.


// 5. Asynchronous Programming (cross-paradigm)
// Callback-based
// Promise-based
// async/await (syntactic sugar over Promises) ye paradiagm programming me nahi ata but asyncronous programing ziada hi important topics me se aik h (By default in nature javascript Syncronous kam krta h)


// Syncronous programmking ya step by step code chale ga or Asyncronous programing me multiple tasks 1 saath chale ga


setTimeout(() => {
   console.log("Task 1");
}, 4000);

setTimeout(() => {
   console.log("Task 2");
}, 1000);

setTimeout(() => {
   console.log("Task 3");
}, 3000);