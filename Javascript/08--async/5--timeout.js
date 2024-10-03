// setTimeout
setTimeout(function () {
  console.log("hello"); // after certain time fn will execute
}, 4000);

// setInterval
setInterval(() => {
  console.log("hello internet");
}, 2000); // fn always execute after certain time

// stop

// clearInterval
let id2 = setInterval(() => {
  console.log("internet");
}, 2000);

clearInterval(id2); // its sync process to stop setInterval

// clearTimeout
let id = setTimeout(() => {
  console.log("hello");
}, 1000);

clearTimeout(id); // its sync process to stop setTimeout
