// 2. Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var x = 2;
// while ( x <= 65536) {
//     console.log(x);
//     x *= 2;
// }



// 3. An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones


// 1. Generate total amount of cones - happens one time ---> allCones

// 2. Customer wants to buy x amount of cones ----> conesPurchased

// 3. We need to check to see if we have the amount of cones available

// 4. if not ---> sorryMessage

// 5. if we do have enough cones ----> happyConesMessage
//subtract the amount of cones sold from allCones

// 6. repeat until I dont have any cones left ----> allCones > 0

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//     if(conesPurchased > allCones) {
//     //    sad path
//        var sadConesMessage = "cannot sell you  " + conesPurchased + " I only have " + allCones + " Left..."
//
//         console.log(sadConesMessage);
//
//     } else {
//     //    happy path
//
//         allCones -= conesPurchased;
//
//         var happyConesMessage = conesPurchased + " cones sold ..." + allCones + " cones to go.";
//
//         console.log(happyConesMessage);
//     }
//
//
// } while (allCones > 0);
//
// console.log("yay! I sold all the cones!");

