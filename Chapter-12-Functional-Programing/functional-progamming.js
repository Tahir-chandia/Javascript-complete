//Functional programming:

/* Functional programing me hum sab se ziada  priority functions ko dete  h ta k code maintainable/readable ho or performance orinted ho  ye programming krne ka aik tareeka h. Functional programming declarative programming ka aik sub type h jis me bane banae functions ki help se kaam krte hain.
Functgional progamming hame restrict nahi karta  code ko maintain kr kaam kr sakte h.
*/



// 1.Declarative

// Imperative: (How do you do it ?)

// let arr = [1,2,3,4,5]
// let double = []
// for(let i = 0;i<arr.length;i++){
//     double.push(arr[i]*2)
// }
// console.log(double);

// Declarative: (What do you want?)
// let arr = [1,2,3,4,5]
// let duplicate = arr.map(elem=>elem *2)
// console.log(duplicate);


// 2. PURE FUNCTIONS. Functional programming functions pr based krta h. Jo input dya h wahi same output return kre extra kuch na kre

//Pure Function.

// function sum(a,b){
// let sum = a+b
//     return sum
// }
// console.log(sum(5,1));

// Impure Function.

// let count =0
// function increament(){
// count ++ // External shared state
// console.log(count);
// }
// increament()

// 3.Immutability (Change nahi ho sakta ya do not change)


/*
let str = "tahir" // string change nahi ho sakta
str[0] ="m"
console.log(str);
*/

/*
let arr = ["alu","tinda","bhindi"] // array change ho sakta h but do not change in orignal array

function addElem(elem){
let arr2 = [...arr,elem]
return arr2
}
let result = addElem("dhanya")

console.log(arr);
console.log(result);
*/

// 4.Avoid shared state. Functional proframming me shared state ko avoid kya jata h.

// let count =0
// function increament(){
// count ++ // External shared state
// console.log(count);
// }
// increament()


// 5.Avoid side effect. Functional proframming me side effect ko avoid kya jata h.

// let count =0
// function increament(){
// count ++ 
// console.log(count);// External side effect
// }
// increament()
