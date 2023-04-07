// compilation
// code execution

// compilation phase
// 1. tokenizing
// 2. parsing -> abstract syntax tree
// 3. code generation

// why compilation?
/*  1. Early error should be checked
    2. Determining appropriate scope of variable -> (which variable belongs where)
    
 */

// how javascript code executes?
/* code execution phase in Js code executes inside execution context */

// what is global context?
/* 1. creation phase
   2. code execution phase 

   Creation phase (Global memory): firstname:undefined, this: window object 

 */

// what is local context?
// closers

console.log(this); // window object will be printed
console.log(window); // window object will be printed

console.log(firstName); // undefined will be printed
var firstName = "rahul"; // global scope
console.log(firstName);

