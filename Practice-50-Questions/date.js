// 44. Guess the Output:

// let date = new Date(0)
// console.log(date.toString());
// console.log(date.toLocaleString());


// 45. Validate that a user's selected date range is no longer than 30 days.


// let startDate = new Date("2025-04-21")
// let userDate = new Date("2025-05-22")
// let diff = userDate - startDate
// let numberOfDays = Math.floor(diff /(1000 * 60 *60 *24))
// if(numberOfDays >30 ){
// console.log("failed submission because you are attemping after 30 days.");
// }else{
// console.log("Congratulations! Your form Submitted");
// }

//47.47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)

/*
let n = 7
let date = new Date("2025-04-21")
let timeStamp = date.getTime() + n  *1000 *60 *60 *24
let newTime = new Date(timeStamp)
console.log(newTime);
*/


// 48.
// let dob = new Date('2004-05-25');
// let currentDate = new Date();

// let age = currentDate.getFullYear() - dob.getFullYear();
// let monthDiff = currentDate.getMonth() - dob.getMonth();
// let daysDiff = currentDate.getDay() - dob.getDate();

// if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
//     age--;
// }

// console.log(age);


// 49.
let date = '2024-04-28T08:23:13.234Z'

function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

let formatedDate = formatDate(date);
console.log(formatedDate)

