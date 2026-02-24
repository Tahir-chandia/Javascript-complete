// Syncronous VS Asyncronous

// Syncronous:

//line by line code execute hoga or aik waqt me aik task run hoga

/*
console.log("task 1"); 
console.log("task 2");
console.log("task 3");
for (let i = 0; i < 2000; i++) {
    console.log("kam",i);
}
console.log("task 4");
console.log("task 5");
*/


//Asyncronous:
//Multiple tasks aik saath start kr sakte hain. jo pehle complete hoga uska reslut aa jae ga 

/*
setTimeout(() => {
    console.log("pehla kaam complete");
}, 2000);

setTimeout(() => {
    console.log("doosra kaam complete");
}, 1000);

setTimeout(() => {
    console.log("teesra kaam complete");
}, 4000);

setTimeout(() => {
    console.log("chotha kaam complete");
}, 6000);
*/

//setTimeOut() aik higher order function h jo k asyncronous  hota h
//Javascript by default syncronous in nature hota h.