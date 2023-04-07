const obj1 = {
  key1: 'value1',
  key2: 'value2',
};

// * __proto__ 
// * official ECMAscript documentation
// * [[prototype]]

// ? __proto__ and [[prototype]] are same

// * prototype is different

const obj2 = {};
obj2.key3 = 'value3';

// ** There is one more way to create an empty object in JavaScript
const obj3 = Object.create(obj1); // ** creates a shallow copy (reference of the original object)

// console.log(obj3) // {}
obj3.key3 = 'value3'
obj3.key2 = 'unique'
// console.log(obj3.key2);
console.log(obj3.__proto__);
