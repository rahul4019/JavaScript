// Methods: functions inside object

function personInfo() {
  console.log(`firstname: ${this.firstname} \nage: ${this.age}`);
}

const person = {
  firstname: "rahul",
  age: 23,
  // if you only write "firstname" and "age" you will get an error of not defined
  about: function () {
    // console.log(`name: ${this.firstname}\nperson age: ${this.age}`)
    // console.log(this)
    // this is an object whose value is determined by how the function is being called
  },
};
const person2 = {
  firstname: "deepak",
  age: 13,
  about: personInfo,
};
const person3 = {
  firstname: "shivam",
  age: 10,
  about: personInfo,
};

person.about(); // person is calling the about method (function) so value of "this = person"

// person2.about();
// person3.about();


function myFunc() {
    console.log(this)
    // In browser it will give "window" object
    // in vs code it will give "global" object
}

myFunc();


