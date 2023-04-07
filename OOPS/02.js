// 1. function that create object
// 2. add key value pair
// 3. return the object
function createUser(firstname, lastname, age, address, email) {
  const user = {};
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  //   user.about = function () {
  //     return `${this.firstname} is ${this.age} years old!`;
  //   };
  //   user.is18 = function () {
  //     return this.age >= 18;
  //   };

  /// ** These methods are having reference to the original function and they are not taking extra space
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  user.message = userMethods.message;
  return user;
}

const userMethods = {
  about: function () {
    return `${this.firstname} is ${this.age} years old!`;
  },
  is18: function () {
    return this.age >= 18;
  },
  message: function () {
    return 'Hello from user!';
  },
};

// ** Each time user created, user.about and user.is18 methods get created which is redundant code
const user1 = createUser('rahul', 'kumar', 12, 'abc', '@gmail.com');
const user2 = createUser('gaurav', 'kumar', 21, 'xyz', 'gaurav@gmail.com');
const user3 = createUser('mohit', 'kumar', 20, 'pqr', 'mohit@gmail.com');

console.log(user1.about());
console.log(user2.about());
