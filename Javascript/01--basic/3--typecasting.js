// manual type casting
let data = 10;
let data1 = data.toString(); // 10
let data2 = String(data); // 10
let data3 = Number(data2); // 10
let data4 = Boolean(data); // true


// automatic type casting
let data5 = 10 + "hi"; // 10hi
let data6 = 10 + true; // 11
let data8 = 10 + undefined; // NaN
let data9 = 10 + null; // 10