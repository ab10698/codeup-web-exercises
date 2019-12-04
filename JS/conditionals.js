"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var r = confirm("Would you like to enter a number?");
// if (r == true) {
//   var number = prompt("Please enter a number.");
//     if (number%2 == 0) {
//         alert("This number is even.");
//     } else if (number%2 !== 0) {
//         alert("This number is odd.");
//     }
//
//
//     if (number > 0) {
//         alert("This number is positive.");
//     } else if (number < 0) {
//         alert("This number is negative.");
//     } else {
//         alert("Are you sure that is a number?");
//     }
//     alert(number + 100);
// } else {
//     alert  ("You pressed Cancel!");
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var color = 'green';
//
// function analyzeColor(color) {
//     if (color == 'blue') {
//         return "blue like the sky.";
//     } else if (color == 'red') {
//         return "red like an apple.";
//     } else if (color == 'orange') {
//         return "orange like.. well.. an orange.";
//     } else if (color == 'yellow') {
//         return "yellow like a dandelion.";
//     } else if (color == 'green') {
//         return "green like grass";
//     } else if (color == 'indigo') {
//         return "indigo like the flight and travel company 'Indigo'.";
//     } else if (color == 'violet') {
//         return "Violet like the flowers";
//     } else {
//         return "I dont think that color is in my vocab chief."
//     }
// }
//
// console.log(analyzeColor(color));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


// function analyzeColor(randomColor) {
//     if (randomColor == 'blue') {
//         return "blue like the sky.";
//     } else if (randomColor == 'red') {
//         return "red like an apple.";
//     } else if (randomColor == 'orange') {
//         return "orange like.. well.. an orange.";
//     } else if (randomColor == 'yellow') {
//         return "yellow like a dandelion.";
//     } else if (randomColor == 'green') {
//         return "green like grass";
//     } else if (randomColor == 'indigo') {
//         return "indigo like the flight and travel company 'Indigo'.";
//     } else if (randomColor == 'violet') {
//         return "Violet like the flowers";
//     } else {
//         return "I dont think that color is in my vocab chief."
//     }
// }
//
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(randomColor) {
//     switch (randomColor) {
//         case 'blue':
//             return "blue like the sky.";
//             break;
//         case  'red':
//             return "red like an apple.";
//             break;
//         case 'orange' :
//             return "orange like.. well.. an orange.";
//             break;
//         case 'yellow' :
//             return "yellow like a dandelion.";
//             break;
//         case 'green' :
//             return "green like grass";
//             break;
//         case 'indigo' :
//             return "indigo like the flight and travel company 'Indigo'.";
//             break;
//         case 'violet' :
//             return "Violet like the flowers";
//             break;
//         default :
//             return "I dont think that color is in my vocab chief."
//             break;
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var response = prompt("Enter a color");
//
// function analyzeColor(response) {
//     switch (response) {
//         case 'blue':
//             return "blue like the sky.";
//             break;
//         case  'red':
//             return "red like an apple.";
//             break;
//         case 'orange' :
//             return "orange like.. well.. an orange.";
//             break;
//         case 'yellow' :
//             return "yellow like a dandelion.";
//             break;
//         case 'green' :
//             return "green like grass";
//             break;
//         case 'indigo' :
//             return "indigo like the flight and travel company 'Indigo'.";
//             break;
//         case 'violet' :
//             return "Violet like the flowers";
//             break;
//         default :
//             return "I dont think that color is in my vocab chief."
//             break;
//     }
// }
// console.log(analyzeColor(response));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var total = prompt("Total amount?");
// var lucky = 0;
// function calculateTotal() {
//     if (lucky == 0) {
//         return(lucky + "? Sorry but you did not win a discount.");
//     } else if (lucky == 1) {
//         return(total * .90);
//     } else if (lucky == 2) {
//         return(total * .75);
//     } else if (lucky == 3) {
//         return(total * .65);
//     } else if (lucky == 4) {
//         return(total * .50);
//     } else if (lucky == 5) {
//         return("A 5! Congratulation on winning! Everything you purchased is free! ");
//     } else {
//         return ("I will need to contact support real quick...");
//     }
// }
// console.log(calculateTotal(lucky));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var total = prompt("Total amount?");

function calculateTotal() {
    if (luckyNumber == 0) {
        return(luckyNumber + "? Sorry but you did not win a discount. Now please pay $" + total.);
    } else if (luckyNumber == 1) {
        return("You got a 1. Your total before the discount was $" + total + " and is now $" + total * .90);
    } else if (luckyNumber == 2) {
        return("You got a 2. Your total before the discount was $" + total + " and is now $" +total * .75);
    } else if (luckyNumber == 3) {
        return("You got a 3. Your total before the discount was $" + total + " and is now $" +total * .65);
    } else if (luckyNumber == 4) {
        return("You got a 4. Your total before the discount was $" + total + " and is now $" +total * .50);
    } else if (luckyNumber == 5) {
        return("A 5! Congratulation on winning! Your total before the discount was $" + total + " and now Everything you purchased is free! ");
    } else {
        return ("I will need to contact support real quick...");
    }
}
console.log(calculateTotal(luckyNumber));