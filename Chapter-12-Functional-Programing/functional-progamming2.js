// 6. Reuse Or Compose Logic

//normal method

// function str(str){
//     console.log("@"+str.charAt(0).toUpperCase() + str.slice(1).replaceAll(" ",""));
// }

// str("tahir khan")

//Reuse and compose logic
/*
let str = "tahir khan"
function upperCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1)}

function removeSpaces(str){
    return str.replaceAll(" ","")
}
function atTheRate(str){
    return "@" + str
}
let result = atTheRate(removeSpaces(upperCase(str)))
console.log(result);
*/

//7.Don't iterate

let arr = [1,2,4,5,6,8,9,10]

//Don't do this
// for(let i=0;i<arr.length;i++){
//     if(arr[i]% 2 ===0){
//         console.log(arr[i]);
//     }
// }

//Do this

let result = arr.filter((elem)=>elem%2 ===0)
console.log(result);
