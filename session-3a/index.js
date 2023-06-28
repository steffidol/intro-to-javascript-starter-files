// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5;
const b = 10;
let c = a + b;

// Expected output 15
console.log("Original output: " + c);

a = 20;

// Expected output 30, but it's actually 15
console.log("After a has been updated: " + c);

c = a + b;

// Expected output 30
console.log("After c has been updated to use the new a: " + c);

console.log(5);
console.log(2 + 2);
console.log("Hello");
console.log("Hey," + "how are you?");

// FUNCTIONS

// function sayHey(name) {
//     console.log("Hey " + name + "!");
// }

const sayHey = (name) => "Hey " + name + "!";

console.log(sayHey("Harjeet"));

// function conversation(name, topic){
//    sayHey(name)
//    console.log("Do you like " + topic + "?")

// }

const conversation = (name, topic) =>
  sayHey(name) + ", Do you like " + topic + "?";

console.log(conversation("Harjeet", "food"));

function sayDay() {
  return "Thursday";
}

const day = () => "It is Thursday";

console.log(day());

// function futureAge(current_age){
//     let futureAge = current_age + 5
//     return futureAge
// }

const futureAge = (current_age) => current_age + 5;

console.log(futureAge(30));
