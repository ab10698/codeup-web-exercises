"use strict";
// console.log("Hello from external JavaScript! ")
alert("Welcome to my website!");

var Color = prompt("What is your favorite color?","default gang.");

alert("Your favorite color is " + Color + " ? Mine too!" )


var movies = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?")

if (movies == "27") {
    alert("Man, that's a lot for some old movies...")
} else {
    alert("That math does not add up...")
}

var payday = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.")

if (payday == "7420") {
    alert("That's one fat check there pal. Mind paying for drinks tonight?")
} else {
    alert("Are you sure that's how much you got payed? that doesnt really add up right to me...")
}

var isEnrolled = prompt("A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.")

if (isEnrolled == "they are enrolled") {
    alert("Welcome to the class");
} else {
    alert("Im sorry, but they wont be enrolled");
}

var offer = prompt("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.")

if (offer == "not expired and 2 items") {
    alert("Offer is valid.")
} else if (offer == "not expired and member") {
    alert("Offer is valid. Have a great day member!")
} else {
    alert("Offer is not valid...")
}

