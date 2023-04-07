console.log(firstName); // throw an error
let firstName = "Rahul"; // in case of let and const variable in global memory remains "UNINITIALIZED"
// Hoisting happens in case of let and const (because before executing the first line of code firstname is present in global memory)
console.log(firstName);

/*
    TDZ (temporal dead zone) => till the time firstname was in global memory and uninitialized it was in TDZ 
 */

console.log(typeof fullName)

let fullName = "rahul kashyap"
