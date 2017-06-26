// lexical arrow functions/lambda functions/fat arrow functions
// there are scoping considerations to be made

// EXAMPLE ONE
// standard function
function foo() {
  console.log('hello world');
}

let foo = () => console.log('hello world');

// EXAMPLE TWO
function sum(one, two) {
  return one + two;
}

let sum = (one, two) => one + two;

// single param (no parentheses
let multiply = num => num * 5;


// example 4 - scope
function outer() {
  console.log(this);

  function inner() {
    console.log(this);
  }
}

// scope in reference to outer
function outer() {
  console.log(this);

  let inner = () => console.log(this);
}
