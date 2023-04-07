// integer literals

/* 0
100
0xff => 255
0b, 0B */

// floating point literals

/* 1.9
3.14

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000 */

// Arithmatic
// +,-,*,/,%,**
// ** => to raise to the power 

Math.pow(2,3)
Math.pow(3,1/3)
Math.round(.6)
Math.ceil(.6)
Math.floor(.6)
Math.abs(-5)
Math.min(2,3,4,95,52)
Math.max(2,3,4,95,52)
Math.random()


// ES6 new mehtods
Math.cbrt(27)
Math.hypot(3,4) 

// Math.clz32(num) returns the number of leading zeros in a 32-bit binary reperesentation of number
// console.log(Math.clz32(0xf));

// Infinity,no errors; just Infinity
// divide by 0; It's just NaN

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.isNaN(2));
// console.log(Number.isNaN("2"));
// console.log(Number.parseInt("3"));
// console.log(Number.parseInt("3a"));


let statementOne = .3 - .2 
let statementTwo = .2 - .1

/* console.log(statementOne === statementTwo);
console.log(statementOne === .1);
console.log(statementTwo === .1); */
console.log(.3-.2);
console.log(.2-.1);

// BigInt
/* let googol = "1"+"0".repeat(100);
console.log(BigInt(googol)); */


// let -name = 10;