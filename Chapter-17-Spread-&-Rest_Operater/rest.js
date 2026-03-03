//Rest Operator:
// Rest operator collects/packs values.


// 1.Rest in Function Parameters
/*
function sum(...numbers){
    let value = numbers.reduce((pre,cur)=>{
        return pre + cur;
    })
    return value
}

let result = sum(1,2,3,4)
console.log(result);
*/


// 2.Rest with Destructuring Array

/*
let arr = [1,2,3,4,5]
let [first,now,...hello] = arr
console.log(first);
console.log(hello);
console.log(now);
*/

// 3.Rest with Destructuring Object

/*
let obj = {name:"Tahir",age:24}
let {name,age} = obj
let {age,name} = obj

console.log(obj);
console.log(name);
console.log(age);
*/
