// Getting parts of date

let date = new Date()
// it shows current pc date and time
// we can also get all these by UTC methods

console.log(date.getFullYear());// 2025
console.log(date.getUTCFullYear());// 2025

console.log(date.getMonth());//0-11 (0 = january) 
console.log(date.getUTCMonth());//0-11 (0 = january)

console.log(date.getDate());//1-31 
console.log(date.getDay());// 0 - 6 (0 = Sunday)
console.log(date.getHours());//0-23
console.log(date.getMinutes());//0-60
console.log(date.getSeconds());//0-60
console.log(date.getTimezoneOffset());//UTC - local time
console.log(date.getMilliseconds());//0-999 (milliseconds of current time)


// Setting Parts of date

// we can set every thing of date and time by using set methods and also we set utc methods
date.setFullYear(2022)
date.setUTCFullYear(2012)
date.setMonth(2)// March
console.log(date);

// Working with timestamp

console.log(Date.now());// method 1 

let date3 = new Date().getTime() // method 2 
console.log(date3);
