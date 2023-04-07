10 + "mango" // "10mango"
"7" + "4" // 28

console.log(Number("3"));
console.log(Number("3x"));
console.log(Number(""));
console.log(Number([]));
console.log(Number([99]));
console.log(Number([99,88]));

// objects to primitive value
/* 
1. prefer-String
2. prefer-Number
3. no-preference */

// toString() || valueOf()

let colorValue = 14
let binaryColorValue = colorValue.toString(2)
console.log(binaryColorValue)

console.log({1: "one"}.toString())

let newDate = new Date(2022,3,4);
// console.log(newDate.toString());
// let dateString = newDate.toString();
console.log(newDate.valueOf());


