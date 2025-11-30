 // formating dates

 let date = new Date()

 console.log(date);
 console.log(date.toISOString()," ISO\n "); // Standard UTC format (ISO 8601) 
 console.log(date.toString() ," String\n"); // Full date & time string 
 console.log(date.toDateString() ," Date String \n"); // Date only (weekday, month, year)
 console.log(date.toTimeString() ," Time String\n"); // Time only with time zone
 console.log(date.toLocaleString() ," Local String\n"); // Time only with time zone
 console.log(date.toLocaleDateString() ," Local Date String\n"); //  Local date format (e.g., DD/MM/YYYY)
 console.log(date.toLocaleTimeString() ," Local Time String"); //  Local time format (e.g., 12-hour)

 