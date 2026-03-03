// Destructuring Objects: 
// 1.Basic Destructuring
/*
let obj = {
        name:'manas',
        age:21,}
        
    let {name, age} = obj
    console.log(name, age)
        */

//2. Destructuring with rest operator
/*
let obj = {
        name: 'manas',
        age: 21,
        city: 'bhagalpur',
        isMarried: false,
    }
    
let { name, age, ...others } = obj;
console.log(name, age, others);
    */


//3. Default values
/*
let { name, age = 18 } = {
        name: 'manas',
    }
    console.log(name, age);
    */


//4. Rename variable
/*
let {name: fullName} = {
        name: 'Manas Kumar Lal'
    }

console.log(fullName);

*/

// 5.Nested Object

/*
let obj = {
        name: 'manas kumar lal',
        age: 21,
    address: {
            city: 'bhagalpur',
            pincode: 812004,
            arr: [1, 2, 3, 4, 5]
        }
    }
    
let {
            name: fullName,
            age,
            address: {pincode: code, arr:[a,b]},
        } = obj;
        
console.log(fullName)
console.log(age)
console.log(code)
console.log(a,b);
        */

// object destructuring in function parameters
/*
function greet({name, age}){
        console.log(`hello ${name}, your age is ${age}`)
    }
    
    let obj = {
    name: 'manas kumar lal',
    age:21,
}
greet(obj);

*/