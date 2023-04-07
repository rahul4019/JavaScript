let num = [1, 3, 91, 29, 69];

/* 
for (let i = 0; i < num.length; i++){
    console.log(num[i]);
} */

// for each loop
num.forEach((element) => {
    console.log(element * element);
} )

// Array from
let name = "rahul"
let array = Array.from(name);
console.log(array)

// for of
for (let i of num) {
    console.log(i)
}

// for in
/* for ( let i in num) {
    console.log(i) // prints index (keys)
    console.log(num[i]) // prints element (value)
} */

