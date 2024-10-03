// string
let text = "dev"; // string data type
let text1 = String(123); // manual string convert
let text2 = new String("hey"); // string constructor

// template literal
console.log(`this is ${text}`); // this is dev

let Myname = "anita"; // create
console.log(Myname); // read
Myname = "Anita"; // update
console.log(Myname[0]); // index like a array
console.log(Myname.length); // 5 

// print using loop
for (const iterator of Myname) {
  console.log(iterator); // a n i t a
}

// print using for in
for (const iterator in Myname) {
  console.log(iterator); // 0 1 2 3 4
}

// print using for
for (let i = 0; i < Myname.length; i++) {
  console.log(Myname[i]); // anita
}