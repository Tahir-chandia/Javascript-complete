//Math.random() Method
// in this method it give values between 0 and 1 where 0 included and 1 excluded

// console.log(Math.random());

// if we need 1 then we add 1

// console.log(Math.random()+1);

// if wee need values between 0 and 10 then we multiply by 10 where 10 excluseive
// console.log(Math.random()*10);

// if we need without decimal then we use Math.floor() it gives exact value rather than 
// Math.ceil() because it gives 0 in exteamly rare cases
// console.log(Math.floor(Math.random()*10));

// if we need values between minimun and maximum values then we use formula

let min = 5
let max = 25

console.log(Math.floor(Math.random()*(max-min + 1)+min));
