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