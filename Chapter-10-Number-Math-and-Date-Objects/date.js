// Date in javascript

// creating Date 

// 1.No Arguements (Current Date and Time)
let date = new Date()
console.log(date); // it gives UTC Time not local time
console.log();

//2.Date string (Iso or other formats)
let date1 = new Date("2025-04-24T12:00:00")// ISO format (recomended)
let date2 = new Date("june 23, 2025 12:00:00")// long format
let date3 = new Date("2025/07/20 12:00:00")// slash format

console.log(date1);
console.log(date2);
console.log(date3);
console.log();

// 3.Numbers: new Date(year,month index like javascript,day,hours,minutes, seconds,millisc)
let date4 = new Date(2025,3,4,7,12,22,33)
console.log(date4);
console.log();

//4.Milliseconds since epoch (Unix timestamp)
let date5 = new Date(1766187627111)// Milliseconds since jan 1, 1970
console.log(date5);

//5. Copy another date
let date6 = date5
console.log(date6);