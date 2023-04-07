// * "new" keyword

// Constructor function
function CreateUser(firstname, age) {
  // Capitailze the function name to make it constructor function
  this.firstname = firstname;
  this.age = age;
}

CreateUser.prototype.about = function () {
  return `${this.firstname} is ${this.age} years old!`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.message = function () {
  return `Hello world!`;
};

const user1 = new CreateUser('rahul', 'kumar', 12, 'abc', '@gmail.com');
const user2 = new CreateUser('gaurav', 'kumar', 21, 'xyz', 'gaurav@gmail.com');
const user3 = new CreateUser('mohit', 'kumar', 20, 'pqr', 'mohit@gmail.com');

for (let key in user1) {
  // console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
