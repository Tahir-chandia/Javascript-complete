// OOPS (Object Oriented Programming):

// Class : 
// A Blueprint or Template, encapsulates data (properties) and functions (methods)

// Object: 
// instance of a class, Each object has its own unique set of values for its properties.

class Car {
    constructor(name,color){
        this.name = name;
        this.color = color
    }
    start(){
        console.log(`${this.name} Car started...`)
    }
    stop(){
        console.log(`${this.name} Car stopped...`)
    }
}

let car1 = new Car("Toyota","red")
let car2 = new Car("Buggati","black")
let car3 = new Car("BMW","grey")

console.log(car1);
car1.start()
car1.stop()
console.log(car2);
car2.start()
car2.stop()
console.log(car3);
car3.start()
car3.stop()
