/*Q.6- Create a simple ATM program.

User can choose:

1. Check Balance
2. Deposit
3. Withdraw
4. Exit

Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show the message with a new balance.

And in case of “Withdraw” if withdraw amount is greater than balance then or less
than 1Rs then produce error otherwise withdraw amount and show remaining balance.
*/
let balance = 5;
let amount;
let operation = prompt(
  "Select an operation\n1. Check Balance\n 2. Deposit\n 3. Withdraw\n4. Exit"
);

if (operation === "1") {
  console.log(balance);
} else if (operation === "2") {
  amount = Number(prompt("Enter amount to deposit. "));
  balance += amount;
  if (amount < 1) {
    console.log("Please deposit more than 1R");
    console.log(balance);
  } else {
    console.log(balance);
  }
} else if (operation === "3") {
  amount = Number(prompt("Enter amount to withdraw. "));
  if (amount > balance) {
    console.log(
      "You have sufficient amont to withdraw Your amount is " + balance
    );
  } else {
    balance -= amount;
    if (amount < 1) {
      console.log("Please withdraw more than 1R");
      console.log(balance);
    } else {
      console.log(balance);
    }
  }
} else if (operation === "4") {
  console.log("Good bye");
} else {
  console.log("Please choose valid operation.");
}
