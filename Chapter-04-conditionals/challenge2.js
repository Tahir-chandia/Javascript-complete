/* Scenario: On a video streaming platform, verify user to access premium content

Question:
Write a program to check if a user has valid subscription. If the user has a subscription,
further check if the subsciption is "premium" or "standard".


1.If "premium", display "Access to all content".
2.If "standard", display "Access to Limited content".
3.If the user doesn't have a subscription, display "Please subscribe to access content."
*/

let hasSubscription = true
let subscription = "standard"


if(hasSubscription){
    if(subscription ==="premium"){
        console.log("Access to all content.");
    }else if(subscription ==="standard"){
        console.log("Access to Limited content.");
    }else {
        console.log("Unknown subscription.");
    }

}else{
    console.log("Please subscribe to access content.");
    
}