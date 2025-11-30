/* Scenario: A website gives discounts based on total shopping cart amount.

Question:
Writea program where:
1.If the cart value is less than $50,no discount is applied.
2.If the cart value is between $50 to $100,apply a 10% discount.
3.If the cart value is more than  $100,apply a 20% discount.
Display the final cart after the discount.
*/

let cartValue = 80
let finalCartValue

if (cartValue<=50){
    console.log("no Discount");
}else if (cartValue >50 && cartValue<100){
    finalCartValue = cartValue - ( cartValue * 10/100)
    console.log("A 10% discount hs been applied");
}else{
    finalCartValue = cartValue - (cartValue * 20/100)
    console.log("A 20% discount hs been applied");
}
console.log("Final cart Amount after discount "+finalCartValue);



