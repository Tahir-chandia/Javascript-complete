// methods of arrays:

//1. push() .It can change in orignal array , it will add values in the last of the array and return length of the array

// let arr = [52,25,"khan",true]
/*
console.log(arr);
let arr2 = arr.push("Zahid")
console.log(arr);
console.log(arr2);


//2. pop() .It can change in orignal array , it will remove values in the last of the array and return removed value of the array

let arr3 = arr.pop()
console.log(arr);
console.log(arr3);
*/

//3. unshift() .It can change in orignal array , it will add values in the start of the array and return length of the array

/*
let arr2 =arr.unshift("zahid")
console.log(arr);
console.log(arr2);

//4. shift() .It can change in orignal array , it will remove values in the start of the array and return removed value of the array

let arr3 = arr.shift()
console.log(arr);
console.log(arr3);
*/

/*5.slice(). It cannot change in orignal array , it cut the part we want by give two indexing parameter
 (start,end) it not include last index eg (2,7) it will cut from 2 to 6 No 7 is not include
 */


// let arr2 = arr.slice(1,4)
// console.log(arr);
// console.log(arr2);


/*6.splice(). It can change in orignal array, it will add or remove element from array according
to our need by use indexing, it takes 3 parameter (start,delete elements,add elements) and returns delete value*/

// let arr2 =arr.splice(1,1,"khan")
// console.log(arr);
// console.log(arr2);


//7.concat().  It cannot change in orignal array ,it join just as string

// let arr =[1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr.concat(arr2)

// console.log(arr3);

//8. toString(). It cannot change in orignal array ,it convert array into string

// let arr =[1,2,3]
//  let arr2 = arr.toString()
//  console.log(arr);
//  console.log(arr2);

// 9.join(). It cannot change in orignal array ,it convert array into string and we can also add characters between them

// let arr =[1,2,3]
//  let arr2 = arr.join(" ")
//  console.log(arr);
//  console.log(arr2);


//10. includes().It cannot change in orignal array ,it check the element include in array and return true or false


// let arr =[1,2,3]
// let arr2 = arr.includes(2)
// console.log(arr);
// console.log(arr2);

//11. indexof().It cannot change in orignal array ,it give index no


// let arr =[1,2,3]
// let arr2 = arr.indexOf(2)
// console.log(arr);
// console.log(arr2);



//12. reverse().It can change in orignal array ,it reverse the values of the array

// let arr =[1,2,3]
// arr.reverse()
// console.log(arr);

//13. find(). It cannot change in orignal array , it gives function inside to find the first matched value if cannot match all values and also we need to return the value in function

// let arr =[1,2,3]
// let arr2 = arr.find((item)=>{return item=2})
// console.log(arr);
// console.log(arr2);

//14. flat(). It cannot change in orignal array ,it makes nested  arrays into 1 array

// let arr = [1,2,3,[4,5,6,7,[7,8,9,10 ,[11]]]]
// let arr2 = arr.flat(3)
// console.log(arr);
// console.log(arr2);


/*15.sort() . It can change in orignal array ,it can sort according to string if we need to sort numbers then
need to compare them by using function*/

// let strArr = ["Human","Animal","Flower","Planets"]
// strArr.sort()
// console.log(strArr);
// let numArr = [1,10,20,2,29,22]
// numArr.sort()
// console.log(numArr);
// let numArr2 =numArr.sort((a,b)=>{return a-b})
// console.log(numArr2);


