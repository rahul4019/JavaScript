// Arrays

let num = [1, 2, 3, 4, 5];
let numMore = [11, 12, 13, 14];

// let newArr = num.concat(numMore)
let newArr = [...num, ...numMore];
console.log(newArr);

// **** Interview question ****
let array = [22, 99, 24, 98, 3535, 432];

// let compare = (a, b) => {
//   return a - b;
// };

// array.sort((a, b) => {
//   return a - b;
// });

// array.reverse()

let deletedValues = array.splice(1,3, 4190, 1959182)
// let deletedValues = array.slice(1,2)
console.log(deletedValues)

console.log(array);
