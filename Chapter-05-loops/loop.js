/* Loops in Javascript:
Loops in JavaScript are a way to repeat a block of code multiple times.

Types of Loops in JavaScript :

core loops are for , while and do while 

1. for 
2. while 
3. do-while
4. for-of (arrays, strings, maps or sets [don’t care about index])
5. for-in (iterating over the properties (keys) of an object or the indexes of an array)
*/


//1. for loop

/*for (first we need to initalise value ; now we need to add condition; and at last we need to iterate the loop ){  task to do   }
*/



for(let i=1;i<=5;i++){
    console.log("numbe: "+i);
}

/* How for loop work:
First it check initialise value then it check condition if the condition is true it execute the code and then it check and update the initialise value according to iteration and then it again check the condition if the condition is true it execute the code the whole cycle repeat wen condition is true if the condition is false it will break the loop.*/



//2. while
let condition
while(condition){
    // task to do
}


// if the condition is true all in any loop it will be infinite loop avoid infinte loop

// we add initialization and iteration manually


//3.do-while


do{
    // task
}while(condition)

// it run 1 time rather than condition is false

// 4.for of
// it return value and work on string and array
let char = "Tahir"

for(let lett of char){
    console.log(lett);   
}




// 5.for in
// it return key and work on object and return index if there is no keys
let char2 = "Tahir"

for(let lett in char2){
    console.log(lett);   
}