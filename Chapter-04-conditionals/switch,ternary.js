//5.Switch Statement
// Write a traffic program using switch statement.

let light = "yellow";

switch(light){
    case "red":
        console.log("stop");
        break
        case "yellow":
         console.log("Caution");
        break
        case "green":
         console.log("Go");
         break
        default :
        console.log("Unknown color");      
}

//6.Ternary Operator [? :] (short form)
let isLoggedIn = true
let message = isLoggedIn? "Welcome":"Please log in."
console.log(message);
