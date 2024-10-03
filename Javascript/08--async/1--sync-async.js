// synchronous
// code will execute line by line synchronously
// one line error will stop next execution

// sync
console.log("1st line code");
console.log("2nd line code");
console.log("3rd line code");

// asynchronous
// it will not block next line,when result
// available it will execute within time

// async
setTimeout(function () {
  console.log("4th line code");
}, 5000); // even it is 0sec,it took time

// sync
console.log("5th line code");
console.log("6th line code");

// output :
// 1st line code
// 2nd line code
// 3rd line code
// 5th line code
// 6th line code
// --5sec later--
// 4th line code

// event loop
// code => callstack => webapi ====
// => callbackqueue => codeExecution

// sync
// javascript code first transfer to callstack
// if callstack found that code is sync code
// then immiately execute the code

// async
// javascript code first transfer to callstack
// if callstack found that code is async code
// transfer to webApi,here async timer start
// running & when result available then transfer
// to callbackqueue,if callbackqueue is empty then
// direct transfer to callstack,if callbackqueue
// not empty then code execute like queue style
