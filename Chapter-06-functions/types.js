/*Types of function:
1.Function declaration (normal function)
Declared with function keyword, can be hoisted
*/

function greet(){
    console.log("hello");
    
}

/*2.Function Expression :
Stored in a variable; not hoisted
*/

let greet2=function(){
console.log("Hy");

}
greet2()


/*3. Arrow Function(fat arrow function):
Shorter syntax, introduced in ES6
*/
let greet3 = ()=>{console.log("Kya hal h");}

greet3()

/*4. Anonymous Function:
A function without a name, often used in
expressions.*/
setTimeout(() => {
    console.log("name");
    
}, 2000);

/*5. IIFE(Immediately InvokedFunction Expression):
A function that runs as soon as it's defined*/

(function(){
    console.log("Hello bhai");
    
})()

