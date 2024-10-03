// create obj using constructor
const OBJ = new Object({ name: "dev", age: 90 });
console.log(OBJ); // { name: 'dev', age: 89 }

// class and object and constructor
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("dev", 23);
console.log(person); // Person { name: 'dev', age: 23 }

// create obj using Factory Functions
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}
const person_ = createPerson("dev", 23);
console.log(person_); // { name: 'dev', age: 23 }

// spred operator
const obj_ = { a: 1, b: 2 };
const newObj = { ...obj_, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }

// destructure
const obj = { id: "dev", number: undefined };
const { id, number = 56 } = obj; // if num value not present then 56
console.log(id, number); // these are actual variable

// getter setter
const object = {
  a: "dev",
  get hey() {
    // only used for get that data
    return console.log(this.a);
  },
  /**
   * @param {String} value
   */
  set hello(value) {
    // only used for set that data
    this.a = value;
  },
};

object.hey; // dev
object.hello = "posto";
object.hey; // posto

// map data structure
// its a fast and updated version of object
const createMap = new Map();

// methods
createMap.set("a", 11); // write data
createMap.get("a"); // read data
createMap.has("a"); // check if data exists
createMap.delete("a"); // delete key
createMap.clear(); // delete all data
console.log(createMap.size); // 1
