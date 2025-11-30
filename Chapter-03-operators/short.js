
 //||
/*
 let result = "" || "Guest" || null ||23
 console.log(result);//  "Guest"
 
 let result2 = undefined || null ||0
 console.log(result2);//  0
*/
 //&&

 /*
 let result = "Tahir" && true &&  undefined && 55
 console.log(result);// undefined

 let isAuthenticated = true
 let user = "Tahir"
 let result2 = isAuthenticated && user
 let result3 = user && isAuthenticated
 console.log(result2);// Tahir
 console.log(result3);// true
*/

/*  ?? (Nullish Coalescing): Returns the right-hand value only if the left is null or undefined.
 (Better than || when dealing with falsy values like 0 or "" that are still valid.) */

 /*
 let result = null ?? "Guest" 
 console.log(result);//  "Guest"
 
 let result2 = 0 ?? "Tahir"
 console.log(result2);//  0
 
 let result3 = "" ?? "Khan"
 console.log(result3);// "" 
 
 let result4 = undefined ?? "Khan"
 console.log(result4);//    "khan"
 
 let b = null
 let a=undefined ;
 let result5 = a ??b
 let result6 = b ??a
 console.log(result5);
 console.log(result6); 
  
 //🔍 Difference between || and ??

 
 let x = 0;
 console.log(x || 10); // 10 (because 0 is falsy)
 console.log(x ?? 10); // 0 (because 0 is NOT null or undefined)
 */

// example 1:
 
let name = null;
let userName = name ?? "Guest";
console.log(userName); // Output: "Guest" name is null, so it returns "Guest".

// Example 2: Empty String with ??

let input = "";
let value = input ?? "Default";
console.log(value); // Output: """" is a valid (non-nullish) value, so it is NOT replaced by "Default".

// Example 3: Falsy Value (0) with ??

let count = 0;
let displayCount = count ?? 5;
console.log(displayCount); // Output: 0  0 is falsy but not null or undefined, so ?? keeps it.

//Example 4: Comparing with ||


let age = 0;
console.log(age || 18); // Output: 18 — (|| treats 0 as falsy)
console.log(age ?? 18); // Output: 0 — (?? treats 0 as valid)  Use ?? when 0, false, or "" are meaningful values and shouldn't be replaced.


//xample 5: Nested ?? for Multiple Fallbacks

let a = null;
let b = undefined;
let c = "Hello";

let result = a ?? b ?? c ?? "Default";
console.log(result); // Output: "Hello"First non-nullish value ("Hello") is returned after skipping null and undefined.

/*⚠️ Note
?? cannot be used with && or || without parentheses due to operator precedence rules. Example:

javascript
Copy
Edit
// let result = a || b ?? c; ❌ Syntax Error
let result = (a || b) ?? c; // ✅*/