console.log("hello".includes("x")); // false
console.log("hi dev".indexOf("d")); // 3
console.log("hello".lastIndexOf("l")); // 3
console.log("hello".charAt(1)); // "e"
console.log("hello".concat(" world")); // "hello world"
console.log("hello".endsWith("lo")); // true
console.log("hello".startsWith("he")); // true
console.log("hello".slice(1, 4)); // "ell"
console.log("hello".substring(1, 4)); // "ell"
console.log("HELLO".toLowerCase()); // "hello"
console.log("hello".toUpperCase()); // "HELLO"
console.log("  hello  ".trim()); // "hello"
console.log("hello world".split(" ")); // ["hello", "world"]
console.log("hello world".replace("world", "JavaScript")); // "hello JavaScript"
console.log("hello".repeat(3)); // "hellohellohello"
console.log("hello".match(/l/g)); // ["l", "l"]
console.log("hello".search("l")); // 2