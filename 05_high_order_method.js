let arr = [6, 29, 59, 12];

// MAP
// creates new array
let newArr = arr.map((elem, index, array) => {
  // console.log(elem)
  return elem + index;
});

// FILTER
let arr2 = [23, 87, 50, 91];

let newArr2 = arr2.filter((value) => {
  return value < 80;
});

console.log(newArr2);

// REDUCE
// reduces a value

let arr3 = [99, 45, 61, 72];

let reducedVal = arr3.reduce((element1, element2) => {
  return element1 + element2;
});

console.log('after reduce method: ', reducedVal);
