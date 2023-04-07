/* const user = {
  firstname: 'rahul',
  lastname: 'kumar',
  email: 'rahulkashyap4019@gmail.com',
  age: 2,
  address: 'House no, colony, state, city, pincode',
  about: function () {
    return `${this.firstname} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
 */
// const aboutUser = user.about();
// console.log(aboutUser);

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
  user.about = function () {
    return `${this.firstname} is ${this.age} years old!`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser('rahul', 'kumar', 2, 'abcd', '@gmail.com');

console.log(user1);
console.log(user1.is18());
console.log(user1.about());
