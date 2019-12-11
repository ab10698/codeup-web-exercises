
var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive",
        "heated seats",
        "leather interior"],
    goGoGo: function(key) {
    if (key == "key") {
        console.log("vroom");
    } else {
        console.log("*engine halting noise*")
    }
 }
}

// console.log("car was made in " + car.year);
// console.log("car has these options: ");
// car.options.forEach(function(option) {
//    console.log(option)});
// car.goGoGo("key");
// ^------Same as------^
// var make = "Toyota";
// var model = "Sienna";
// var year = 2009;
// var isTitled = true;
//  var goGoGo = function(key) {
//     if (key == "correct") {
//         console.log("vroom");
//     } else {
//         console.log("*engine halting noise*")
//     }
//  }


var honda = {
    make: "Honda",
    model: "Accord",
    year: 2016,
    color: "blue",
    Time: function(button) {
        if (button == "clock") {
            return console.log("The clock face is now on the display");
        } else {
            return console.log("I didnt want the fuel indicator on...");
        }
    }
}
// console.log("car was made in " + honda.year);
// console.log("The color of my car is " + honda.color);
// console.log("Let me try and see the time:");
// honda.Time("clock");

var cars = [
    car,
    {
        make:"Dodge",
        model:"Challenger",
        year: 2015
    },
    {
        make:"Ford",
        model:"Shelby GT 500",
        year: 1969
    },
    {
        make:"Cadillac",
        model:"Escalade",
        year: 2019
    }
]

cars.forEach(function(car) {
   console.log(car.year + " " + car.make + " " + car.model) ;
});

var tank = {
    model: "M1 Abrams",
    country: "The United States",
    camo: "Olive"
}

var tanks = [
    tank,
    {
        model: "M1A2 Abrams",
        country: "The United States"
    },
    {
        model: "Leopard 2",
        country: "Germany"
    },
    {
        model: "Type-90",
        country: "Japan"
    },
    {
        model: "T-72",
        country: "Russia"
    }
]

tanks.forEach(function(tanks) {
    console.log("The " +tanks.model + " is a main battle tank produced in " + tanks.country) ;
});
