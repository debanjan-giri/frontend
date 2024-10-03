// promise
// another way of handle async code execution in javascript
// Resolve (successful completion of the task),
// Reject (if an error or failure occurs).

let promise = new Promise(function (resolve, reject) {
  let success = true; // sync operation

  if (success) {
    resolve("Operation successful"); // async operation
  } else {
    reject("Operation failed"); // async operation
  }
});

// callbacks
promise
  .then((result) => {
    console.log(result); // "Operation successful"
  })
  .catch((error) => {
    console.error(error); // "Operation failed"
  })
  .finally(() => console.log("all done"));

// promise chainning
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("Task 1 done");
        resolve();
      } else {
        reject("Task 1 failed");
      }
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log("Task 2 done");
        resolve();
      } else {
        reject("Task 2 failed");
      }
    }, 1000);
  });
}

// callback
task1()
  .then(() => task2()) // Waits for task1 to complete and then calls task2
  .then(() => console.log("All tasks completed")) // Waits for task2 to complete
  .catch((error) => console.error("An error occurred:", error)); // Handles any errors

// async await
// async keyword is used to declare an asynchronous function.
// An async function always returns a promise and await keyword
// use to pause the execution of the function until a promise is resolved
async function doTask1() {
  try {
    await task1(); // wait for task1 to complete
    await task2(); // wait for task2 to complete
    console.log("All tasks completed");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    console.log("all done");
  }
}
