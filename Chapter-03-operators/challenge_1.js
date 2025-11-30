/*Challenge1:
On a shopping website, calculate the total cost of a product when given the 
price per item (price = 150) and the quantity (quantity = 3). Also, calculate a 10% discount
 on the total cost and display the discounted price."*/

let pricePerItem = 150;
let itemQuantity = 3;
let totalPrice = pricePerItem * itemQuantity;
let discountTotal = totalPrice * (10 / 100);
let dicountTotalPrice = totalPrice - discountTotal;
console.log("Price Per Item = " + pricePerItem);
console.log("Item Quantity = " + itemQuantity);
console.log("Total Price = " + totalPrice);
console.log("Discount  Price = " + discountTotal);
console.log("Discount Total Price = " + dicountTotalPrice+"\n");
