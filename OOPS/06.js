/* const userMethods = {
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
 */
function createUser(firstname, lastname, age, address, email) {
  const user = Object.create(createUser.prototype); // * user's proto will be set to usermethods
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

createUser.prototype.about = function () {
  return `${this.firstname} is ${this.age} years old!`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.message = function () {
  return `Hello world!`;
};

const user1 = createUser(
  'rahul',
  'kumar',
  23,
  'Address of rahul',
  '@email.com'
);
console.log(user1.about());
