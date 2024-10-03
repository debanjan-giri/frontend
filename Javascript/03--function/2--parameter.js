// parameter
function op(name, age) {
  console.log("name : ", name);
  console.log("age :", age);
}

// argument
op("dev", 25); // name : dev , age : 25
op(25, "posto"); // name : 25 , age : posto

// default parameter value
function fn(a = 34) {
  console.log(a);
}
fn(); // 34 // if argument is not passed
fn(22); // 22

// any data type argument
function bb(data, box) {
  console.log(data.name);
  console.log(data[0]);
}
bb({ name: "hi" }, [1, 2, 3]);
bb([1, 2, 3]);

// destructure
function ss(data) {
  const { ab, cd } = data;
  console.log(ab, cd);
}
ss({ ab: 45, cd: 89 });

// rest oprator for array
function go(...data) {
  console.log(data.length); // 6
}
go(1, 23, 234, 23, 5, 235);