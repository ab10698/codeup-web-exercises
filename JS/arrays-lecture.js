var pets = [];
 pets[0] = "Toby";
 pets[1] = "Princess";
 pets[2] = "Sampson";
 pets[3] = "Jill";
 pets[4] = "Bubbles";
 pets[5] = "Malu";

 // for (var i = 0; i<pets.length;i++){
 //     console.log(pets[i]);
 // }



// i   log     pets.length
// 0   Toby    7
// 1   Princess
// 2   Samson

// pets.forEach(function(pet, i, arr) {
//     console.log(pet)
// })


var fruit = ["apple", "orange", "banana", "starfruit", "mango"];
 // fruit[fruit.length] = "pear"
// console.log(fruit);
// alert ("Hello fruit lover");
fruit.push("pear");
fruit.push("peach");
// fruit.push("mango");
// fruit.push("starfruit");
// console.log(fruit.shift());
fruit.unshift("plum");
// console.log(fruit.pop());
// console.log(fruit[fruit.indexOf("starfruit")]);
// console.log(fruit);

var fruits1thru3 = fruit.slice(0,3);
var fruits6thru8 = fruit.slice(5,8);
console.log(fruits1thru3);
console.log(fruits6thru8);
console.log(fruit);



// var sentence = "The quick brown fox jumped over the lazy dog";
// console.log(sentence);
// var words = sentence.split(" ");
// for (var i=0; i<words.length; i++) {
//  var word = words[i];
//  // var firstLetter = word.split()[0];
//  var letters = word.split();
//  var capitalFirstLetter = letters[0].toUpperCase();
//  var capitalizedWord = "";
//  capitalizedWord += capitalFirstLetter;
//  for (var j=1; j<letters.length; j++) {
//   capitalizedWord += letters[j];
//  }
//  words[i] = capitalizedWord;
// }
// sentence = words.join(" ");
// console.log(sentence);


// words.forEach(function(word)) {
 // var firstletter = word.split().unshift();
 // var letters = word.split();
 // word.charAt(0) = word.charAt(0).toUpperCase();


function titleCase(str) {
 var splitStr = str.toLowerCase().split(' ');
 for (var i = 0; i < splitStr.length; i++) {

  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
 }
 // Directly return the joined string
 return splitStr.join(' ');
}
//
// console.log(titleCase("the quick brown fox jumped over the lazy dog"));



