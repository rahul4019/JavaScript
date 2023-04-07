// Array loops

let num = [1, 3, 91, 29, 69];

// classic for loop
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// For each loop

// num.forEach((n) => {
//   console.log(n);
// });

// num.forEach((n) => {
//   console.log(n + 1);
// });

// Array from
let name = 'rahul';
let newArr = Array.from(name);
// console.log(newArr);

// for of

for (let n of num) {
//   console.log(n);
}

// for in

for (let i in num) {
  console.log(i);
  console.log(num[i]);
}
