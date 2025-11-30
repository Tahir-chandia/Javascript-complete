// Array iteration methods or Functional array methods

// 1.map(). It can return new array and cannot change in orignal array  here we can perform tasks for a new array
 
// let arr = [5,4,21,30]

// let arr2 = arr.map((elem,index,arr)=>{
//     return elem *2;
     
// })
// console.log(arr);
// console.log(arr2);

// 2.filter(). It can return new array and cannot change in orignal array. it gives new array when result is true  

// let arr = [5,4,21,30,2,0,4,6]

// let arr2 = arr.filter((elem,)=>{
    //     return elem%2 ==0;
    
    // })
    // console.log(arr);
    // console.log(arr2);
    
    
// 3.reduce(). It can return a single value rather we add or subtract and cannot change in orignal array.

// let arr = [5,4,21,30,2,0,4,6]
// let arr3 = [5,4,21,30, 2,0,4]

// let arr2 = arr3.reduce((pre,curr)=>{
//     return pre + curr;
     
// })
// console.log(arr3);
// console.log(arr2);


// 4.forEach(). It can return undefined  and cannot change in orignal array.

let arr3 = [5,4,21,30, 2,0,4]

let arr2 = arr3.forEach((elem,index,arr)=>{
    return elem;
     
})
console.log(arr3);
console.log(arr2);

/* Note: So if you just want to loop through an array and do something,
forEach() is great. But if you want to create a new array or
value, use map(), filter(), or reduce().*/