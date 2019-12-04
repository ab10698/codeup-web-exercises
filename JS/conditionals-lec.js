"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin) {
// //    show admin navbar
// //    showAdminNavbar() <--- function
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
// //    send the 20% off coupon
// //    sendBirthdayEmail() <----- function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy == true) {
//     alert("its raining");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 99;
//
// if(currentBalance >= itemCost) {
//     alert("You can buy the item :D");
// } else {
//     alert("You are broke dude D:");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
//
// if(numberOfLives > 0) {
//     alert("You still have lives, hero! Get back in the fight!");
// } else {
//     alert("K . O !");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing";
//
// if(weather == "snowing") {
//     alert("its snowing!");
// } else {
//     alert("aw, its not snowing outside...");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
//
// if(numberInput > 10) {
//     alert(true);
// } else {
//     alert(false);
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 0;
//
// if(numberOfLives > 0) {
//     alert("NEXT STAGE!");
// } else {
//     alert(" K . O ! ");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "raining";
//
// if(weather == "snowing") {
//     alert("its snowing!");
// } else {
//     alert("aw, its not snowing outside...");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 8;
//
// if(numberInput > 10) {
//     alert(true);
// } else {
//     alert(false);
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// var numberOfLives = 1;
//
// function checkIfGameIsOver(numberOfLives) {
//     if(numberOfLives == 0) {
//         return "GAME OVER!";
//     } else {
//         return " Still have: 1 live(s). Continue? ";
//     }
// }
// console.log(checkIfGameIsOver(numberOfLives));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// var weather = "raining";
// function isItSnowing(weather) {
//     if(weather == "snowing") {
//         return "its snowing!";
//     } else {
//         return "aw, its not snowing outside...";
//     }
// }
// console.log(isItSnowing(weather));
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = 14;
//
// if(age >= 13) {
//     alert("You may proceed.");
// } else {
//     alert("you need some parent permission bub...");
// }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var color = "yellow";
//
// function trafficLight(color) {
//     if(color == "green"){
//         return "Green means go.";
//     } else if(color == "yellow"){
//         return "Yellow means slow it down and yield, pal.";
//     } else if(color == "red"){
//         return "Red means stop buddy.";
//     } else {
//         return "I dont think that color belongs on a traffic light...";
//     }
// }
// console.log(trafficLight(color));




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.



// var userAge = 17;
// var hasPermit = true;
//
// if(userAge < 15){
//     alert("sorry you're not old enough...");
// } else {
//     if(userAge == 15){
//         alert("You can have a permit.");
//     } else if (userAge >= 16 && hasPermit){
//         alert("You can have a drivers license.");
//     } else if (userAge >= 16 && !hasPermit){
//         alert("Sorry, you need to have a permit before you can get a license...");
//     } else {
//         alert("Please speak with the front desk...");
//     }
//
// }



// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
// var weather = "rainy";
// var weatherMessage = (weather == "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.

// var weather = "rainy";
//
// switch(weather) {
//     case "rainy":
//         alert("its raining");
//         break;
//     case "sunny":
//         alert("its sunny");
//         break;
//     default:
//         alert("Have a nice day!");
//         break;
// }


function checkTrafficLight(trafficLight) {
    switch (trafficLight) {
        case "green":
            alert("green means go!");
            break;
        case "yellow":
            alert("Yellow means slow down and yield!");
            break;
        case "red":
            alert("Red means stop!");
            break;
        default:
            alert("Proceed with caution.");
            break;
    }
}
console.log(checkTrafficLight("yellow"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

//If shopping has been done for the week, child gets 10$, else child only gets 5$.

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

//If weather = "sunny", send sunny response, else if weather = "rainy", send rainy response, else if weather = "snowing", send snowing response, else if weather = "overcast", send overcast response, else send a default if weather does not match any of the given.

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// If theme = "white" , background color is white and text color is black, else if theme = "black", background color is set to black and text color is set to white, else if theme does not match any, return a default of white background color and black text color.