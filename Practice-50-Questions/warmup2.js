//  11. Convert an array of strings into a single comma-separated string.


/*
let arr = ["hello","how","are","you",22]
console.log(arr.join(), typeof arr.join()); 
console.log(arr.toString(),typeof arr.toString); 
*/

// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

/*
let arr = [1,1,2,["1","as",3,1,4,"a"]]

arr.splice(3,1,...arr[3]) // method 1
console.log(arr);
 
let fl=arr.flat(1) // method 2 (best method)
console.log(fl);
*/

// 13. Write a function that checks if all elements in an array are numbers.


/*
let arr = [1,3,1,5,6,"assa",5,1]
function checkElem(localArr){
   let isNumber = true

// localArr.forEach((elem)=>{

//     if(typeof elem !== "number"){
//         isNumber = false
        
//     }
// })
// console.log(isNumber); // method 1
    
let arr2 = arr.every((elem)=>{
    typeof elem === "number"
    
} )
console.log(arr2); // method 2
}
checkElem(arr) 
*/
 
//14. Build a simple isPrime() function to check if a number is prime.


// function isNumber(num){
// if(num ===0 || num === 1){
//     return false
// }
//     for(let i = 2; i<= Math.sqrt(num);i++){
//     if(num % i === 0){
//         return false
//     }
// }
// return true

// }

// console.log(isNumber(0));



// 15. Create a function that removes duplicate values from an array.

/*
function removeDuplicate(arr){
    let set = new Set(arr)
    return [...set]
}

let arr = removeDuplicate([1,62,3,1,4,1,4,2,4,3,1,4,3,1])
console.log(arr);
*/
