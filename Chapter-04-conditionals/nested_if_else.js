//4.Nested if Statements
/* Question : Write the program to check if the age of person is 18 , if the person age is 18  or above
then check the if the person have id if the person has id then print the message:"You can enter the club"
if the person has not id then print the message "You need id card to enter the club" and if the
person age is less then 18 then print the message "You're too Young"*/

let age = 18;
let id = false;
if (age >= 18) {
  if (id) {
    console.log("You can enter the club!.");
  } else {
    console.log("You need id card to enter the club!.");
  }
}else{
        console.log("You're too Young!.");
            
}
