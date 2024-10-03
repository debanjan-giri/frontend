// created with object literal
const obj = {
  a: 12, // dont use same key , otherwise it replace by last one
  b: 34, // access key specific value using dot operator obj.b
  ["string"]: 67, // pass key value dynamically
};

// console
console.log(obj); // { a: 12, b: 34, c: 67 }
console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // [ 12, 34, 67 ]

// print specific value
console.log(obj.a); // dot
console.log(obj["a"]); // [ string ]

obj.x = "hello"; // add
obj.a = "internet"; // update
delete obj.c; // delete key

// length
console.log(Object.keys(obj).length); // 3
console.log(Object.values(obj).length); // 3

// store anything
const data = "10";
const obj = {
  u: undefined,
  s: "hi",
  n: 78,
  b: true,
  a: [],
  o: {},
  f: function () {},
  ff() {}, // function implementation
  v: data,
  data, // if variable name is same as key
};
