// variable
// its a memory container that hold data and their data type

// create
var data2 = 10; // not secure
let data3 = 10; // secure
const data4 = 10; // constant

data3 = 100; // update
console.log(data3); // 100 // read

// variable hoisting
data = 6; // first assign
console.log(data); // 6 then use it
var data; // then declare it

// function scope
function function_scope() {
  let a = 1;
  const b = 2;
  var c = 3;
}
// no variable accessable outside

// block scope
if (true) {
  let aa = 1;
  const bb = 2;
  var cc = 3;
}
// only var accessable
