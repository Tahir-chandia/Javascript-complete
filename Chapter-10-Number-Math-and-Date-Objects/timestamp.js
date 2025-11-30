//Calculations On Time Stamps

/*
 1. What Is a Timestamp?
 ❑ A timestamp is the number of milliseconds since the Unix Epoch (Jan 1, 1970 UTC).

 ❑ In JavaScript, Date objects internally store time as timestamps

  2. Getting the Current Timestamp.

 ❑ Use Date.now() to get the current timestamp:

 ❑ const now = Date.now(); // milliseconds since Jan 1, 1970
 
 */

//3. Convert Date to Timestamp Use getTime() on a Date object:

// let date = new Date()
// let timestamp = date.getTime()

// console.log(date);
// console.log(timestamp);

// 4. Convert Timestamp to Date Pass the timestamp to the Date constructor:


// let convertDate = new Date(1764411355807)
// console.log(convertDate);


/*5. Adding or Subtracting Time
 Timestamps are in milliseconds, so you can add or subtract directly:
 ❑ 1 second = 1000 ms
 ❑ 1 minute = 60 * 1000 ms
 ❑ 1 hour = 60 * 60 * 1000 ms
 Example:*/


//  let oneHour = Date.now() + (1000 * 60 * 60)
//  console.log(oneHour);
 

//  6. Calculating Differences Between Dates

// let start = new Date("2025-04-23T11:00:02")
// let end = new Date("2025-04-23T12:04:02")
// let diff = end - start

// let difHr = diff / (1000 * 60 * 60) // differnce / milliseconds * seconds * minutes

// console.log(start);//start
// console.log(end);//end
// console.log(diff);//dif
// console.log(difHr);//dif Hours




//  7. Converting Milliseconds to Human Units
//  Convert milliseconds into readable time:

let ms = 1764411
let minutes = Math.floor(ms /1000/60)

let seconds = (ms % (1000 *60) / 1000)

console.log(`The time  ${minutes} Minutes  and ${seconds} seconds.`);



