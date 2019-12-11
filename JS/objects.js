(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Alex",
        lastName: "Bonawitz"
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    function sayHello() {
        return "Hello, my name is " + person.firstName + " " + person.lastName;
    }
    // console.log(sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180, discount: 0},
        {name: 'Ryan', amount: 250, discount: 12, totalAfter: 220},
        {name: 'George', amount: 320, discount: 12, totalAfter: 281.6}
    ];
    shoppers.forEach(function(shopper) {
        console.log("Hello " + shopper.name + ". your total today is $" + shopper.amount + ".") ;
        if (shopper.discount == 0) {
            return console.log("Sorry, but you do not qualify for a discount today.");
        } else {
            return console.log("Oh, you qualify for our " + shopper.discount + "% discount today. your total is going to be $" + shopper.totalAfter + " today.");
        }
    }/);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var Authors = [
    //     {firstName: "J.K.", lastname}
    // ]
    // var books = [
    //         {
    //             title: "Harry Potter",
    //             author:[
    //                 {
    //                     firstName: "J.K.",
    //                     lastName: "Rowling"
    //                 }
    //             ]
    //
    //         },
    // ]

    var books = [
            {
                title: "Harry Potter",
                number: "1",
                author: [
                    {
                        firstName: "J.K.",
                        lastName: "Rowling",
                    }
                ]
            },
            {
                title: "Leviathan",
                number: "2",
                author: [
                    {
                        firstName:"Scott",
                        lastName:"Westerfeld"
                    }
                ]
            },
            {
                title: "Praetorian of Dorn",
                number: "3",
                author: [
                    {
                        firstName:"John",
                        lastName:"French"
                    }
                ]
            },
            {
                title: "The Horus Heresy: Titandeath",
                number: "4",
                author: [
                    {
                        firstName:"Guy",
                        lastName:"Haley"
                    }
                ]
            },
            {
                title: "Old Earth",
                number: "5",
                author: [
                    {
                        firstName:"Nick",
                        lastName:"Kyme"
                    }
                ]
            }
];

    // console.log(books[0].title);
    // console.log(books[1].title);
    // console.log(books[2].title);
    // console.log(books[3].title);
    // console.log(books[4].title);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(books) {
    //     console.log("Book # " + books.number);
    //     console.log("Title: " + books.title);
    //     console.log("Author: " + books.author[1]);
    //     console.log("-----------");
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
