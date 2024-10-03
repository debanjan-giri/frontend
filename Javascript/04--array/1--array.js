// create array constructor
let data1 = new Array(10, 20, 30, 40);
console.log(typeof data1); // object data type

// index   [-0---1---2---3] element index position
let data = [10, 20, 30, 40]; // but length is 4
console.log(data.length); // 4 // element length
console.log(data.length - 1); // 3 // find last index

console.log(data[0]); // 10 // access
data[0] = 100; // update
data[4] = 50; // add
delete data[4]; // this position create <empty space>

// two dimensional array
let data2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
console.log(data2[1][2]); // 60

// storage
const arr = [function () {}, true, {}, [], undefined, null, 0, ""];

// spead operator
const data5 = [10, 20];
const data6 = [30, 40, ...data5];

// destructuring
const data3 = [10, 20, 30, 40];
const [a, b, c, d] = data3;
console.log(a, b, c, d); // it create 4 variable

// default destructue value
const data4 = [90, undefined]; // if data is undefined
const [e, f = 90] = data4;
console.log(e, f); // 90 90

// destructure with spread
const data7 = [10, 20, 30, 40];
const [cc, ...x] = data7;
console.log(cc, x); // 10 [20, 30, 40]

// for loop
const data8 = [10, 20, 30, 40];
for (let i = 0; i < data8.length; i++) {
  console.log(data8[i]); // 10, 20, 30, 40
}

// for of loop
for (let value of data8) {
  console.log(value); // 10, 20, 30, 40
}

// set data structure
const data = new Set([1, 2, 1]); // cannot contain duplicate
console.log(data); // [1,2]

data.add(4); // push 4
data.has(4); // true
data.values(); // read all value
data.delete(2); // delete
data.clear(); // clear all data
console.log(data.size); // 0

console.log(Array.isArray([1])); // boolean return
console.log(Array.from("str")); // [ 's', 't', 'r' ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log([...Array(4)]);
