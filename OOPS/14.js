// * Static method

class Person {
    constructor(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }

    static classInfo() {
        return 'this is person class'
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

  console.log(Person.classInfo())