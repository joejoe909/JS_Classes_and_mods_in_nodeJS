//Traditional JS object

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    getName: function(){
        return this.dogName;       
    },

    getWeight: function(){
        return this.weight()
    }
}

/**
 * Classes in JavaScript encapsulate data and functions 
 * that are part of that class. If you create a class, 
 * you can later create objects using that class using 
 * the following syntax:
 */

function lg(aString){
    console.log(aString);
}

class ClassName{
    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

// let obj = new ClassName("arg1", "arg2");


class employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let obj = new employee("Johnny", "Cash");

// classes are just some special function beneath the surface.
function Dog(dogName, weight, color, breed){
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}

let dog1 = new Dog("Jacky", 30, "brown", "labrador");
let dog2 = new Dog("Sammy", 30, "brown", "Worlf");

lg(dog1.dogName + " is a " + dog1.breed + " and weighs " + dog1.weight + " kg ");







