// return value
function cc() {
    return 45 + 5;
  }
  let ab = cc() + 5; // 50 + 5
  console.log(ab); // 55
  
  // return
  // after return statement code will not work
  function bb() {
    console.log("dev");
    return;
    console.log("");
  }
  
  // conditional return value
  function cd() {
    return 8 < 10 ? {} : [];
  }
  
  // multiple return
  function zz() {
    if (true) {
      return "";
    } else {
      return 0;
    }
  }
  
  // Closure
  // where an inner function has access to the variables and parameters
  // of its outer function, even after the outer function has finished
  // executing.This allows for encapsulation and helps create private
  // variables and functions. ( outer return inner function )
  
  function outerFunction() {
    var outerVariable = "I am from outer function";
    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
  }
  
  var innerFunc = outerFunction();
  innerFunc(); // Output: "I am from outer function"
  
  // currying
  // function that returns another function with some arguments
  function add(x) {
    return function (y) {
      return x + y;
    };
  }
  
  var add5 = add(5);
  console.log(add5(3)); // Output: 8
  