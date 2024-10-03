// function
// block of code that can be called multiple times
// when we call their name and it will execute ()
function List() {
  console.log("book 1");
  console.log("book 2");
}
List(); // call the function

// function hoisting
// use first and declare later
qq(8, 8); // 16
function qq(a, b) {
  console.log(a + b);
}

// nested function
function A() {
  function B() {
    console.log("dev");
  }
  B();
}

// self invoking function // execute only once
(function () {})();

// anonymous function // a function without name
(function () {})();

// function expression
const hello = function () {};

// arrow function
const arrow = () => {};
const arrow2 = () => 10; // return value
console.log(arrow2()); // 10
