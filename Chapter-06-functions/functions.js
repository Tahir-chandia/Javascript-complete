/*Functions In JavaScript:

A funcion is a block of code that can perform particular task. only runs when  called/invoked.
or
A function in javascript is like reuseable set of instructions.
*/

// Function defination/ define

function myFunc(){
    // task to do
}

myFunc() // function Call /Invoke



/* Ways to create a function:
there are 4 ways to create functions.

1. Without parameter list & without return.*/


function withoutPR(){

}
withoutPR()

//2.2. Without parameter list & with return.

function withoutP(){
return 5
}
withoutP() //no output becuase when we return the function we need to store it when we call or invoke

console.log(withoutP());

//3. With parameter list & without return.

function withoutR(num1,num2){

    console.log(num1+num2);
    
}
withoutR(5,4)
// parameter (num1,num2) are local variable having block scope variable and also placeholder for a value
//arguments(5,4) actual values of the parameter

//4. With parameter list & with return


function withR(num1,num2){

    return num1+num2
    
}
console.log(withR(5,4));



/* Default parameter

Default parameter allows function to define default value of the parameter if no argument (value) is given when
we call  then default is used instead


*/

function myName(name="Tahir",age=24){
    console.log(`my name is ${name} and my age is ${age}`);   
}

myName("Usama",33)