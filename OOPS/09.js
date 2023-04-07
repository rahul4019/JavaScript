const arr = [1, 2, 3, 4];
// prototype
// prototype --> functions

// * Internally
let nums = new Array(1, 2, 3);

/*
 * In prototype of Array, All the methods are present for example
 * includes, find, filter, map, reduce etc.
 */

console.log(arr.__proto__);
console.log(Object.getPrototypeOf(nums))
console.log(nums);
