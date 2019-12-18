/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.age = age;
  this.name = name;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(inputDistance) {
  if (this.tank) {
    let driveableDistance = this.tank * this.milesPerGallon;
    if (driveableDistance < inputDistance) {
      this.odometer += driveableDistance;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    } else {
      this.odometer += inputDistance;
      this.tank -= inputDistance / this.milesPerGallon;
    }
  } else {
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Global Binding - When you simply call 'this' in the global scope, it points to
  the global object, which in borwsers in 'Window'.

  2. Implicit Binding - When use the dot notataion for calling a method of an object,
  the this of the method/function points to the object placed before the '.' . Fir example,
  in a.hello(), the 'this' of hello() points to the object 'a'.

  3. New Binding - Whenever a constructor function is used, using the 'new' syntax, 'this'
  refers to the specific instance of the object that is created and returned by the constructor
  function.
  
  4. Explicit Binding - Whenever you use functions like .call(), .apply(), .bind(), you overwrite
  the 'this' reference of the functions these methods are applied to and a new 'this' reference
  is specifically applied to them. This reference is the valu inside the parentheses.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
