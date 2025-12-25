
// 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.

let startDate = "2023-04-02T04:15:44Z"
let endDate = "2025-08-18T08:12:33Z"


// function date(start,end){
// let startingDate = new Date(start)
// let endingDate = new Date(end)
// let diff = (endingDate - startingDate)/1000

// let years = Math.floor(diff / (60*60*24*365))
// diff = diff % (60*60*24*365)
// let months = Math.floor(diff / (60*60*24*30))
// diff = diff % (60*60*24*30)
// let days = Math.floor(diff / (60*60*24))
// diff = diff % (60*60*24)
// let hours = Math.floor(diff / (60*60))
// diff = diff % (60*60)
// let minutes = Math.floor(diff / 60)
// diff = diff % (60)
// let seconds = Math.floor(diff )
// diff = diff 
// let millSeconds = Math.floor(diff *1000 )
// return `${years} Years ${months} Months ${days} Days ${hours} Hours ${min} Minutes and ${seconds} seconds`

// }
// let formattedDate = date(startDate,endDate)
// console.log(formattedDate);


let {DateTime} = require("luxon")

function date(start,end){
    let startingDate = DateTime.fromISO(start)
    let endingDate = DateTime.fromISO(end)
    let diff = endingDate.diff(startingDate,["years","months","days","hours","minutes","seconds","milliseconds"])
    let {years,months ,days,hours,minutes,seconds,milliseconds} = diff
    return `${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} seconds ${milliseconds} milliseconds`
}

let formattedDate = date(startDate,endDate)
console.log(formattedDate);

