// Higher order functions

let arr = [6, 29, 59, 12];

// MAP
// creates new array
let newArr = arr.map((num, index) => {
  return num + index;
});

// filter
let newArr1 = arr.filter((num) => {
  return num > 10;
});

console.log(newArr1);

// reduce
let reducedValue = arr.reduce((num1, num2) => {
  return num1 + num2;
});

console.log(reducedValue);
