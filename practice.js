//JavaScript String Methods
var str = "HELLO WORLD";
document.getElementById("demo").innerHTML = str.charAt(0);

//JavaScript Strings
document.getElementById("dem").innerHTML = "Hello \
Dolly!";

//ECMAScript 5
var obj = {name: "John", new: "yes"};
document.getElementById("reserved").innerHTML = obj.name;

//JavaScript Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
};
  const x = person;
  x.age = 10;
  document.getElementById("object").innerHTML =
  person.firstName + " is " + person.age + " years old.";

  //Nested JavaScript Objects and Arrays
  let k = "";
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  for (let i in myObj.cars) {
    k += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
      k += myObj.cars[i].models[j] + "<br>";
    }
  }
  document.getElementById("arrays").innerHTML = k;

  // Define an object
const ob = {counter : 0};
// Define Setters and Getters
Object.defineProperty(ob, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(ob, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(ob, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(ob, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(ob, "subtract", {
  set : function (value) {this.counter -= value;}
});
// Play with counter:
ob.reset;
ob.add = 5;
ob.subtract = 1;
ob.increment;
ob.decrement;
document.getElementById("define").innerHTML = ob.counter;

//js constructor
let x1 = "";      // string 
let x2 = 0;       // number
let x3 = false;   // boolean
const x4 = {};    // Object object
const x5 = [];    // Array object
const x6 = /()/;  // RegExp object
const x7 = function(){};  // function
// Display the type of all
document.getElementById("cons").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";

//JS object prototype
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("proto").innerHTML =
"The nationality of my father is " + myFather.nationality; 

//JS FUNCTION

//arrow function
const p = (p, y) => p * y;
document.getElementById("arrow").innerHTML = p(5, 5);

//rest paramiter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;}
let q = sum(4, 9, 16, 25, 29, 100, 66, 77);
document.getElementById("rest").innerHTML = q;

//Invoking a Function with a Function Constructor
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;}
const myObjt = new myFunction("John","Doe")
document.getElementById("Invo").innerHTML = myObjt.lastName; 

//The JavaScript call() Method
const persons = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
document.getElementById("call").innerHTML = persons.fullName.call(person1); 

//JavaScript Function bind
const persone = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    let z = document.getElementById("bind");
    z.innerHTML = this.firstName + " " + this.lastName;
  }
}
let display = persone.display.bind(persone);
setTimeout(display, 3000);

//JS Classes

//JavaScript Class Methods
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const myCar = new Car("Ford", 2014);
document.getElementById("class").innerHTML =
"My car is " + myCar.age() + " years old.";

//Class Inheritance
class Care {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
class Model extends Care {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
const myCars = new Model("Ford", "Mustang");
document.getElementById("inhe").innerHTML = myCars.show();

