//Updating or Adding New Properties


//Update if already existing property and add if not exist.
/*
let obj = {name:"Tahir",
    age:24,
    isMarried :false
    }
    console.log(obj);

obj.name="Tahir khan"
console.log(obj.name);
obj["name"]="Shakeel khan"
console.log(obj.name);

obj.age =26
console.log(obj.age);
obj["age"] =25
console.log(obj["age"])
*/

//Deleting Properties
/*
delete obj.name
delete obj["age"]
console.log(obj);
*/

//this Keyword in object

// In case of object, this refers to the object itself.

let car = {
    brand:"Toyota",
    color:"red",     
    speed:120,     
    drive:function(){console.log(`My car brand is ${this.brand}.`);    // this work on normal function
    },
    "*": "best car"
}
car.drive()