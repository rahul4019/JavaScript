// * GETTERS and SETTERS

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  // * get is used to treat function as a property
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(fullname) {
    const [firstname, lastname] = fullname.split(' ');
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const person1 = new Person('rahul', 'kumar', 52);

// console.log(person1.fullname);
console.log(person1.firstname);

person1.fullName = "Gaurav singh"
console.log(person1)