// * Class
// * In JavaScript classes are fake

class CreateUser {
  constructor(firstname, lastname, email, age, address) {
    console.log('Constructor called!');
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstname} is ${this.age} years old.`;
  }

  is18() {
    return this.age > 18;
  }

  greeting() {
    return `Hello world!`;
  }

  func(str) {
    console.log(str);
  }
}

// * Class constructor cannot be invoked withot "new" keyword

const user1 = new CreateUser('rahul', 'kumar', 12, 'abc', '@gmail.com');
// const user2 = new CreateUser('gaurav', 'kumar', 21, 'xyz', 'gaurav@gmail.com');
// const user3 = new CreateUser('mohit', 'kumar', 20, 'pqr', 'mohit@gmail.com');

console.log(user1.__proto__);
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));

user1.func("Rahul...")