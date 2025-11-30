/*Q.3-check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,
 "FizzBuzz" for both.*/       

let num = 20

if(num%3===0 && num %5 == 0  ){
    console.log("FizzBuzz");
}else if(num%3 == 0 ){
    console.log("Fizz");   
}else if(num % 5 == 0){
    console.log("Buzz");
}
 

