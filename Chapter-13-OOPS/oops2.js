//Abstraction vs Encapsulation:

/*Abstraction:
Abstraction means hiding complex implementation details and showing 
only the essential features to the user.

Encapsulation:
It means wrapping data (properties) and methods (functions) together 
into a single unit, usually a class or an object, and restricting direct access 
to some of the components.

*/
//Example1:

// class Car{
//     #fuel = 100 //private (Encapsulation)

//     #burnFuel(){  // hidden internal method (Abstraction)
//         this.#fuel -= 1
//     }

//     start(){
//         this.#burnFuel();
//         console.log('Car is starting...')
//     }
// }

// let buggati = new Car();

//Example 2:

// class BankAccount {

//     #balance = 100;

//     constructor(holderName, balance = 100) {
//         this.holdersName = holderName;
//         this.#balance = balance;
//     }

//     deposit(balance) {
//         this.#balance += balance;
//     }

//     set setter(balance) {
//         if (isNaN(balance)) {
//             console.error("invalid balance");
//             return;
//         }
//         console.log("balance set successfully")
//         this.#balance = balance
//     }

//     get getter() {
//         return this.#balance
//     }
// }

// let manasAcc = new BankAccount("Manas Kumar Lal", 500);

// manasAcc.setter = 234234;
// console.log(manasAcc.getter)
