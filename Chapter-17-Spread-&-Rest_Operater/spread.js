//Spread Operator:
// Spread operator expands/unpacks values.

//1.Spread Array:
/*
let arr = [1,2,3,4,5,6]
console.log(arr);
console.log(...arr);
*/

//2.Copying Arrays (Shallow Copy)
/* 
let arr = [1,2,3,4,5]
let arr2 = [...arr]
console.log(arr);
console.log(arr2);
*/

//3.Merging Arrays
/*
let boys = ["Tahir","khalid"]
let girls = ["Tahira","khadija"]
let merge = [...boys,...girls]

console.log(boys);
console.log(girls);
console.log(merge);
*/

//4. Spread String
/*
let str = "Tahir"
let spread = [...str]
console.log(str);
console.log(spread);
*/

// 5.Spread in function calls

/*
let num = [1,2,3]
function sum(a,b,c){
    console.log(a+b+c);
}
sum(...num)*/

// 6.Spread Objects

/*
let obj = {name:"Tahir",
age:23
}
let spreadObj = {...obj,isMarried:true}
console.log(obj);
console.log(spreadObj);
console.log(spreadObj.name = "khan");
*/


// 7.Merging Objects
/*
let obj1 = {name:'tahir',
age:25
}
let obj2 = {
    location:"karachi",
    isMarried:true
}
let mergeObj = {
    ...obj1,...obj2
}
console.log(obj1);
console.log(obj2);
console.log(mergeObj);
*/

