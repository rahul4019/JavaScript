// This keyword

const person = {
  name: 'rahul',
  age: 23,
  about: function () {
    console.log('Name: ', this.name);
    console.log('Age: ', this.age);
    console.log('this: ', this)
  },
};

person.about()