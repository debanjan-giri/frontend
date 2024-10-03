// methods
console.log([1, 22, 3].indexOf(33)); // -1
console.log([1, 2, 1].lastIndexOf(1)); // 2
console.log([1, 2, 3].includes(3)); // true
console.log([1, 2].concat([4, 5])); // [1, 2, 4, 5]
console.log([1, 2, 3].join("-")); // 1-2-3 (type string)
console.log([1, 2, 3].toString()); // "1,2,3"
console.log([1, 2, 3].toLocaleString()); // "1,2,3"
console.log([3, 2, 1].sort()); // [1,2,3]
console.log([1, 2, 3].reverse()); // [3,2,1]
console.log([1, 2, 3].push(4)); // [1,2,3,4]
console.log([1, 2, 3].pop()); // [1,2]
console.log([1, 2, 3].shift()); // [2,3]
console.log([1, 2, 3].unshift(0)); // [0,1,2,3]
console.log([1, 2, 3].fill(2)); // [[2,2,2]]
console.log([1, 2, 3].copyWithin(0, 2)); // [3,2,3]
console.log([1, 2, 3].slice(0, 1)); // [1]
console.log([1, 2, 3].splice(0, 1)); // [1] // source data modified
console.log([1, [3, 4], 5].flat()); // [1,3,4,5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5]

// callback
console.log([20, 30].find((e) => e > 10)); // return 1st single element
console.log([20, 30].findIndex((e) => e > 10)); // return 1st index [0]
console.log([20, 30].filter((e) => e > 10)); // return array [ 20, 30]
console.log([1, 1, 8].some((e) => e == 8)); // true if some value true
console.log([1, 1, 8].every((e) => e == 8)); // false ,every value is diff
[1, 1, 8].forEach((e) => console.log(e == 8)); // similar like for loop

// *map* fn apply for every element and return all output in single array
console.log([1, 1, 8].map((e) => e == 8));
console.log([1, 2, [3, 4]].flatMap((e) => e + 4)); // flat + map combo

// *reduce* fn apply for every element and return total value
// accumulator is storage starting with 0 ,loop cycle storage section
console.log([1, 2, 3].reduce((acc, val) => acc + val, 0)); // 6

// reduce start from left to right || reduceRight = right to left
console.log(["1", "2", "3"].reduceRight((acc, val) => acc + val, ""));

// iterator
const iterator = [1, 2, 3].keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1

const valuesIterator = [1, 2, 3].values();
console.log(valuesIterator.next().value); // 1
console.log(valuesIterator.next().value); // 2

const entriesIterator = [1, 2, 3].entries();
console.log(entriesIterator.next().value); // [0, 1]
console.log(entriesIterator.next().value); // [1, 2]
