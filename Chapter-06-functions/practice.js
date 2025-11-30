//1. Write a regular function that takes a string and returns it with the first letter capitalized.
/*
function capitalizedFirstLetter(str){
    console.log(str.charAt(0).toUpperCase()+str.slice(1));
    
}

capitalizedFirstLetter("tahir")
*/


//2. Show an alert message that says “Please login” after 5 seconds on your website.
/*
setTimeout(()=>{
    alert("Please login");
    
},5000)
*/


//3. Make an arrow function that takes a price and a discount, and returns the price after discount.
/*

let calculateDiscount =()=>{
    let price =100
    let discount =20/100
    let priceAfterDiscount = price - (price*discount)
    return priceAfterDiscount
    
}

console.log(calculateDiscount());

*/

//4. Create a function that builds a username from a full name.
/*
function myName(name){
return "@"+name
}

console.log(myName("khan"));
 */


/*5. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go"
for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).*/


function traffic(color){
    if(color==="red"){
        console.log("stop");
        
    }else if(color ==="yellow"){
        console.log("caution");
        
    }
    else if(color ==="green"){
        console.log("go");
    }else{
        console.log("invalid color");

    }

}

traffic("red")
traffic("yellow")
traffic("green")
traffic("gree")
