// Synchronous callback
function message(callback) {
  console.log("hello 1");
  return callback();
}

message(() => {
  console.log("hello 2");
});

// Asynchronous Callback
function displayMessage() {
  console.log(" display message after 3 seconds");
}

setTimeout(displayMessage, 3000);

// chain of callback
function doTask1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function doTask2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

function doTask3(callback) {
  setTimeout(() => {
    console.log("Task 3 done");
    callback();
  }, 1000);
}

// This is callback hell:
doTask1(function () {
  doTask2(function () {
    doTask3(function () {
      console.log("All tasks completed");
    });
  });
});
