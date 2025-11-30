/*Arrays in javascript:

An array is a list that can store multiple values in one place.Think of it like a row of boxes, 
where each box can hold one item (like a number, word, etc.).You can use it to group similar things together.

Create array using array Literal method (recommended):*/

let arr = [2,4,24]
let arr2 = [2,4,24,"Tahir",true]
let arr3 = [2,4,24,"Tahir",true,["hello",54,22]]

console.log(arr);
console.log(arr2);
console.log(arr3);


//Create array using array constructor:

let carr = new Array(4,5,"24")
console.log(carr);

// Note:❑ Array constructor is mostly used when we want to create an empty array with the given length
let nearr = [20]
let carr2 = new Array(20)

console.log(nearr);
console.log(carr2);

nearr.fill(1)
carr2.fill(1)
console.log(nearr);
console.log(carr2);


