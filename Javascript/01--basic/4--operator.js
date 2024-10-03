// arithmatic + - * / % **
console.log(2 % 2); // 0
console.log(2 / 2); // 1
console.log(2 ** 2); // 2^2 = 4
console.log((20 + 20) * 20 - 20); // operator precedence ()

// assignment += -= *= /= %= **=
let data2 = 10;
data2 += 10; // its means data2 = data2 + 10
console.log(data2); // 20

// unray ++ --
let data3 = 10;
console.log(++data3); // before add 1 + 10 = 11
console.log(data3++); // 11 , later add + 1
console.log(data3); // 12

// comparison == === != !== > < >= <=
console.log(10 == 10); // true
console.log(10 != 10); // false
console.log(10 < 10); // false
console.log(10 <= 10); // true
console.log(10 == "10"); // true , check data
console.log(10 === "10"); // false , check data and type

// logical && || !
console.log(true && true); // true (requird two true)
console.log(true || false); // true (atleast one true)
console.log(!false); // true ( change )

// ternary
// if condition true then return first
let data4 = 10 > 10 ? "first" : "second";

// nullish coalescing
// if undefined or null return second
let data5 = undefined ?? 20; // 20
let data6 = 10 ?? 20; // 10

// spread operator
let data7 = [1, 2, 3];
let data8 = [4, 5, 6];
let data9 = [...data7, ...data8]; // [1, 2, 3, 4, 5, 6] copy

// rest operator
add(1, 2, 3, 4, 5, 6);
function add(...data) {
  console.log(data); // [1, 2, 3, 4, 5, 6]
}

// optional chaining
let data10 = { name: "Debanjan" };
let data11 = data10?.age; // undefined but it will handle error

// in operator
let data12 = "name" in data10; // true , key present or not

// delete operator
delete data10.name; // delete key
console.log(data10); // {}

// instanceof
let data13 = new String("hello"); // string constructor return object
console.log(data13 instanceof String); // string obj from string class

// typeof
console.log(typeof "hello"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () {}); // function
