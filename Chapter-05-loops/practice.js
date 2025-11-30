// Q1 Calculate the sum of first "n" numbers.

/*

let n= Number(prompt("Enter your number"))
let sum =0


for (let i = 0; i<=n; i++){
    sum+=i
    console.log(sum);
    
}
*/
//Q2 calculate the sum of 'm' and 'n'

/*
let m= Number(prompt("Enter starting number"))
let n= Number(prompt("Enter last number"))
let sum = 0

for(let i = m ;i<n;i++){
    sum +=i
    console.log(sum);   
}
*/

// Q3 . Print all odd numbers from 0 to ‘n’.
/*
let n= Number(prompt("Enter last number"))
for(let i=1 ; i<=n ;i++){
    if( i % 2 !==0){
        console.log(i);
    }
}

*/

//Q5. Simple Password Checker (Fixed Attempts)

/*
let password  = "abc"
let attemptPassword = 0
let userPassword =null

while(password != userPassword && attemptPassword <3){
    userPassword =prompt("Enter password")
    attemptPassword++
    if(password == userPassword){
        alert("Congratulations your password match");
    }else if(attemptPassword ==3){
        alert("Your attempt is over please try again.");
    }   
    else{
        
        alert("Your password is incorrect please try again.");
    }
}
    */


//Q6. 6. Create a program to find the factorial of ‘n’.

/*
let n =5
let fact = 1

for(let i = 1;i<=n;i++){
    fact *=i
    
}
console.log("factorial "+fact);

*/

//Q7. Print the following pattern. (build it for nth numbers)


let n = 5

for(let i = 1;i<=5;i++){
    let str= ""
    for(let j = 1; j<=i;j++){
        str= str + j+" "
    }
    console.log(str);
    
}