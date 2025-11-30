// Q.1- Give choice to the user to select theme color and set the selected theme color and console it.


/*
let color = "white"
let theme = prompt("Choose your theme color (1.Light 2.Dark 3.Green 4.Blue")

if(theme ==="1"){
    theme = "Light"
    color ="white"
}else if(theme ==="2"){
    theme = "Dark"
    color = "black"
}else if(theme ==="3"){
    theme = "Green"
    color = "green"
}else if(theme ==="4"){
    theme = "Blue"
    color = "blue"
}else{
    console.log("Unknown color: Please choose write color theme. ");
    
}


if (theme === "Light"|| theme === "Blue" || theme === "Green" || theme === "Dark"){    
    console.log(`Your selected theme is ${theme} and color is ${color} .`);
}

*/






//Q.2- Find the smallest of three numbers. Numbers are given by the user.


let number1 =prompt("Enter First number: ")
let number2 =prompt("Enter Second number: ")
let number3 = prompt("Enter Third number: ")

if( number1 < number2 && number1 < number3){
    console.log(`The smallest number is ${number1}`);
}else if(number2 < number1 && number2 <number3 ){
    console.log(`The smallest number is ${number2}`);
    
}else{
    console.log(`The smallest number is ${number3}`);
    
}

















//let user = prompt("Enter number between 1 to 50")

/*
Q.3- Write a program to manage Role-Based Access Control
Given a user role ("admin", "editor", "viewer"):
Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access
Use switch.
*/


/*
let role = "admin"

switch(role){
    case "admin":
    console.log("Admin: Full access");
    break
    case "editor":
    console.log("Editor: edit access");
    break
    case "viewer":
    console.log("Viewer: read-only");
    break
    default:
        console.log("no access");
}

*/