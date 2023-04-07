// const user = {
//   firstname: "rahul",
//   lastname: "kashyap",
//   email: "webdev4019@gmail.com",
//   age: 23,
//   address: "house, street, colony, city, pincode",
//   about: function () {
//     return `${this.firstname} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// 1. function that create object
// 2. add key value pair
// 3. return the object

function createUser(firstname, lastname, email, age, address) {
  const user = {};
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstname} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser('rahul','kashyap','abc@gmail.com',23, 'delhi');

console.log(user1.is18())
