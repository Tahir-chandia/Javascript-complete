// 21. Create a function that  reverse each word of a given sentence. E.g., Mai hun 
// manas → sanam nuh iam.


/*
let sentence = "hello how are you"
function rev(localSen){
    let rev = localSen.split(" ")
    let ervElem = rev.map((elem)=>{
        return elem.split("").reverse().join("")
    }).join(" ")    
    console.log(ervElem);
}
rev(sentence)
*/

// 22. In an array of numbers and strings, only add those numbers which are not strings.

/*
let arr = [2,4,6,7,"44",5,"axc","fd"]
let sum = 0
arr.forEach((elem)=>{
    if(typeof elem === "number"){
        sum += elem
    }
})
console.log(sum);
*/

// 23. How would you check if a number is an integer?

/*
let num = 24234.1223
console.log(Number.isInteger(num));// method 1
console.log(num % 1 === 0 );// method 2
*/


// 24. Write a JavaScript function that reverse a number.


/*
let num = 1234567
let numStr = num.toString().split(" ")
let revNum = numStr.map((num)=>{
    let number = num.split("").reverse().join("")
    return number
}).join("")
console.log(revNum);*/

// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

/*
let str = "Hello how are you?"
let arrStr = ['alpha',"khan","beta","pro","bro"]

function revStr(string,arrStr){
    console.log(string.split("").sort().join("").trim());
    console.log(arrStr.sort());
    
}
revStr(str,arrStr)
*/

// 26. Write a Javascript function that accepts a string as a parameter and conversts the first 
// letter of each word of the string in upper case.
/*
let str = "hello how are you ? i aM fine"
let word =(string)=>{
   let words = string.split(" ")
let capitalWords = words.map(element => {
  return element.charAt(0).toUpperCase() + element.slice(1) ;
});
return capitalWords.join(" ");
}
let capital = word(str)
console.log(capital);
*/


// 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will 
// return the first 'n' elements of the array.

/*
function getArrElem(arr,n) {
    if(!n){

        console.log(arr[0]);
    }else if(arr.length <n){
        console.log("Elements are greater than array");
    }else{
        console.log(arr.slice(0,n));
        
    }
}
getArrElem([1,3,5])*/

// 28. Write a javascript function to get the number of occurrences of each letter in specified 
// string.

/*
let str = "manas"
function strObj(str){
    let obj = {}
    let localStr = str.split("").forEach((elem)=>{
        if(obj.hasOwnProperty(elem)){
                obj[elem] ++
        }else{
            obj[elem] = 1
        }
    })
let obj2 = Object.entries(obj)
obj2.map(elem=>{
    console.log(`apka ${elem[0]} ${elem[1]} itni baar repeat hua h`);  
})
}
strObj(str)
*/

// 29. write a javascript program to find the most frequent item of an array.

/*
let arr = [1,2,4,1,3,4,1,2,4,4,1,]
function arrObj(str){
    let obj = {}
    let localStr = str.forEach((elem)=>{
        if(obj.hasOwnProperty(elem)){
                obj[elem] ++
        }else{
            obj[elem] = 1
        }
    })
    let arrValues = Math.max(...Object.values(obj));  
    let arr = Object.entries(obj)
    let filteredValues = arr.filter(elem =>{
        return elem[1] === arrValues
    })
    console.log(filteredValues);
    
}
arrObj(arr)
*/

// 30. write a javascript program to shuffle an array.

/*
let arr = [1,4,5,7,6,1]
for(let ind in arr){
    let randomInd = Math.floor(Math.random()* arr.length)
    let temp = arr[ind]
    arr[ind] = arr[randomInd]
    arr[randomInd] = temp

}
console.log(arr);
*/