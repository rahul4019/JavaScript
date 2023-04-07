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

function createUser(firstname, lastname, age, address, email) {
  const user = Object.create(userMethods); // * user's proto will be set to usermethods
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser(
  'rahul',
  'kumar',
  23,
  'Address of rahul',
  '@email.com'
);
console.log(user1.about());
console.log(user1.__proto__);
