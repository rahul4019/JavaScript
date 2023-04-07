// * "new" keyword

// Constructor function
function createUser(firstname, age) {
  this.firstname = firstname;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log(this.firstname, this.age);
};

const user1 = new createUser('rahul', 24);

/*
 * "new" keyword doing three things
 * 1. Creates empty object (this => {})
 * 2. return "this"
 * 3. Sets the __proto__ of newly created object to the function's prototype
 */

user1.about();
console.log(user1.__proto__);
console.log(createUser.prototype);

const anotherFunc = () => {
  console.log('hello world!');
};

// * Function assigned to a variable doesn't have prototype

console.log(anotherFunc.prototype); // * Undefined
