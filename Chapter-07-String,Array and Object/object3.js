// Object Methods

//1.Object.keys(obj) no change in orignal object. It returns array of keys. Returns an array of all enumerable property names (keys)

// let obj = {name:"Tahir",
//     age:24,
//     hobbies:"gaming",
//     job:"teaching"
// }

/*let keys = Object.keys(obj)
console.log(obj);
console.log(keys);

//2.Object.values(obj) no change in orignal object. It returns array of values. Returns an array of all enumerable property values 

let values = Object.values(obj)
console.log(obj);
console.log(values);
*/

// 3.Object.assign(target, source) change in original object. Modified target object. Copies properties from source to target and returns the updated object

// let obj2 = {}
// let obj3 = Object.assign(obj2,obj)
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// 4.Object.freeze(obj). it can locks the object means we cannot update , add and remove from object
/*
let person = {
    name:"Rafiq",
    age:44,
    job:"Data-Science"
}
console.log(person);

let person2 = Object.freeze(person)
console.log(person);
person.name = "Tahir"
console.log(person);

person.car = "V8"
console.log(person);
delete person.job
console.log(person);
console.log(person2);
*/

//5.Object.seal(obj)  it can locks the structure off object means we can update ,but we cannot add and remove from object



// const person = {
//     name:"Rafiq",
//     age:44,
//     job:"Data-Science"
// }
// console.log(person);

// let person2 = Object.seal(person)
// console.log(person);
// person.name = "Tahir"
// console.log(person);

// person.car = "V8"
// console.log(person);
// delete person.job
// console.log(person);
// person.age =22 
// console.log(person2);

 
// 6. ObjName.hasOwnProperty(key) No change in orignal object Boolean (true / false) Checks if the object has the specified property directly

const person = {
    name:"Rafiq",
    age:44,
    job:"Data-Science"
}
console.log(person);
let person2 = person.hasOwnProperty("age")
console.log(person);
console.log(person2);
