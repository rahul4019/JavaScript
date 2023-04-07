// let num = [1, 2, 3, 4];
// let numMore = [11, 12, 13, 14, 19];
// delete is not a metod it's an operator
// Arrays lenght will remain same

// let newArray = num.concat(numMore);
// console.log(num.length);
// delete num[0];
// console.log(newArray);

// **** Interview Question ****
let array = [22, 99, 24, 98, 3535, 432];
array.sort(); // sorts the array in alphabatical order considering the array as string

// Using sort for arranging array elements in Increasing order
let compare = (a, b) => {
  // return a - b
  return b - a; // decending order
};
array.sort(compare);
array.reverse(); // reverses the original array

// console.log(array);

// Splice and Slice

let newArray1 = [1, 3, 5, 9, 10, 20, 45, 66];

/* 
let deletedValues = newArray1.splice(1, 2, 1021, 1022, 1023) // splice(starting Index, no. of elements want to delete, elements want to insert)
console.log(deletedValues) */

// Slice method returns new array, doesn't modify the original one
// let slicedArray = newArray1.slice(3);
let slicedArray = newArray1.slice(3, 7); // doesn't include element of last Index (passed in argument)
console.log(slicedArray);
