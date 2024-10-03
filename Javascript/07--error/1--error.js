// execption handling

try {
  throw new Error("create error");
} catch (e) {
  console.log("catch error" , e);
} finally {
  console.log("always execute");
}

// error in javascript
// syntax error : invalid syntax missing perentesis etc
// reference error : when access a var or fn that not defined
// type error : when trying to compare different types
// Range Errors : when number is out of range
// Error Objects : when an error occurs
