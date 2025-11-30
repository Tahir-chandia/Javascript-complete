//Q9. What will be the output of the following JavaScript code?

/*
let x = 10
let y = 5 
let z = "10"

x += y *2
//  10 += (5 *2)
// 10 += 10
// x =20


let isEqual = x == z // false 
let isStrictEqual = x === z // false
let logicTest = (isEqual || isStrictEqual) && !(y > 10) //false
let result = logicTest ? ++x : --y
                            
console.log("x: ",x);// 20
console.log("y: ",y);// 4
console.log("z: ",z);// 10
console.log("isEqual: ",isEqual); // false
console.log("isStrictEqual: ",isStrictEqual);// false
console.log("logicTest: ",logicTest);// false
console.log("result: ",result);//   4
console.log("Typeof z: ",typeof z); //string
 */


// Q10. What will be the output of the following JavaScript code?

let a = 6
let b = 3
let c = "6"

a += b << 1

let d  = a & b
let e  = a |b
let f  = a ^ b
let g  = ~a

let check = (a == c ) && (d <e) || !(f === e )

let result = check ? typeof g : --b

console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);
console.log("d: ",d);
console.log("e: ",e);
console.log("f: ",f);
console.log("g: ",g);
console.log("check: ",check);
console.log("result: ",result);
