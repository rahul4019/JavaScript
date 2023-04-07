// primitive values
// undefined, null, string , numbers : unmutable

let myString = "RaHuL";
myString.toLowerCase(); // gives a new string

// objects are mutable 

let myObject = {name: "rahul"};
myObject.name = "notRahul"
myObject.lastName = "kashyap"

// arrays are mutable 

let heroScore = [2,3,5,9]
heroScore[0] = 1;

// objects are called as referece types
// reference is assigned

let arrayRef = [1,2]

let anotherArrayRef = arrayRef

// reffering to same array
anotherArrayRef[0] = 5
// console.log(arrayRef[0]);
// console.log(arrayRef === anotherArrayRef);

// making copy of original array
let arr2 = Array.from(arrayRef)
// console.log(arr2 === arrayRef)

//************************************* */

// type conversion
// JS gets what JS wants

console.log(10 + "string") // "10string"
console.log("7" * "4") // 28

let num = 1-"x";
console.log(num)
console.log(num + "object")


// true gets to 1
// false, "" gets to 0

// forceful conversion in javascript

Number("3")
let infoStock = 1600.4343
// console.log(infoStock.toFixed(2))


console.log(Boolean(""))
console.log(Boolean([]))


// object to primitive value

// 1. prefer-String
// 2. prefer-Number
// 3. No-preference

let colorValue = 14;