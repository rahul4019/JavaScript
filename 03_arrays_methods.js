// Array methods

let array = [1, 2, 4, 9, 12];
let b = array.toString(); // convert and return string
// console.log(typeof b);
console.log(b);

// join method
let c = array.join("*"); // returns a string
// console.log(typeof c);
console.log(c);

// removes last element
let d = array.pop();
// console.log(d);

// push an element at the last of array
let e = array.push(56);
// console.log(e);

// removes the first element and returns the removed element 
let f = array.shift();
// console.log(f);

// adds an element at begining of the array and returns the length of array
let g = array.unshift(7);
console.log(g);

console.log(array);