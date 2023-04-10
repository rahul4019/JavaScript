// * Function execution context

let foo = "foo";
console.log(foo)
function getFullName (firstname, lastname) {
    console.log(arguments)
    // * Arguments -> array like object which means it has indexing and length
    let myVar = 'variable inside function'
    console.log(myVar)
    const fullName = firstname + " " + lastname
    return fullName;
}
/*
    Whenever a function in JavaScript is called, a new function execution context gets created

*/

const personName = getFullName('rahul', 'kumar'); 
console.log(personName)














