//* Closuers

// function can return function
/* 
function outerFunction () {
    function innerFunction () {
        console.log("Hello world!") 
    }
    return innerFunction;
}

const output = outerFunction();
output()
console.log(output); */

function printFullName (firstname, lastname) {
    function printName () {
        console.log(firstname, lastname)
    }
    return printName; // * When this function will be returned 
    // * It will have firstname and lastname, returned with lexical environment
}

const ans = printFullName('rahul', 'kumar');
ans()