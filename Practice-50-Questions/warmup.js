//1. Create a function that returns the last element of an array.?

/*
*/
// function lastElem(arr){
     
//     return arr[arr.length -1] // method 1
    
// }
// console.log(lastElem(["hello",123,"khan","yes"]));

//2. Find the combination of two arrays.

/*
let arr = [1,3,5,2,5 ]
let arr2 = ["Hlo","dost","how","are","you"]
let arr3 = arr.concat(arr2)  // method1
let arr4 = [...arr,...arr2]  // method2
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
*/

//3. Generate a random integer between 0 to 18.

/*
let random = Math.floor(Math.random()*19)
console.log(random);
*/

//4. Create a function that takes an array containing both numbers and strings, and returns a  new array containing only the string values.

/*
let arr = [ 1,3,5,"aas","sssd",123,455,22]

let newArr = arr.filter((elem)=>{
// if(typeof elem === "string"){
//     return true
// }else{
//     return false
// }// method 1

return typeof elem === "string" //method2
}
)

console.log(newArr);
*/

//5. Find the maximum number in an array.


/*
let arr = [2,4,6,22,4,1,44,43,5,22]
let max = Math.max(...arr)

console.log(max);
*/

// 6. Write a function that returns the length of a given object (number of keys).

/*
let obj = {"name":"Tahir",age:25}
let obj2 = {"name":"Tahir",age:25,"cnic":1764}

function objKey(obj){
let keys = Object.keys(obj).length
return keys
}

let keys = objKey(obj2)

console.log(keys);
*/

// 7. In an array of objects filter out those objects which have gender's value male.

/*
let arr = [{"name":"Tahir",age:25,"gender":"male"},
    {"name":"muskan",age:29,"gender":"female"},
    {"name":"Zohaib",age:22,"gender":"male"}
]

let newArr = arr.filter((elem)=>{
    return  elem.gender === "male"
})

console.log(newArr);
*/

// 8. Given an array of strings, return a new array where all strings are in uppercase.

/*
let str = ["alpha","gama","beta","rays"]

let uppStr= str.map((elem)=>{
  return  elem.toUpperCase()
})
console.log(uppStr);
*/

// 9. Check if an object is empty (has no keys).

/*
let obj = {
    "name":""
}

let isEmptyObj = Object.keys(obj).length < 1
if(isEmptyObj){
    console.log("keys are empty");
}else{
    console.log(Object.keys(obj));
    
}*/

// 10. Create an array of numbers and double each value using .map().

let numArr = [1,2,3,4,5]

let dblArr = numArr.map((elem)=>{
 return   elem* 2
})
console.log(dblArr);
