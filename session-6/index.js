// ************************ Arrays and pop() ***************************










// ************************* SORTING *******************









// ********************* LOOPING AND CHAINING **********************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function, to be used when sorting:
function compare(personA, personB) {
  return personA.age - personB.age;
}
