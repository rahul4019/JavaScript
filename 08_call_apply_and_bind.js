/********  CALL  **********/

// const user1 = {
//     firstname: "rahul",
//     age: 23,
//     about: function(hobby, favMusician) {
//         console.log(this.firstname, this.age, hobby, favMusician)
//     }
// }

function about(hobby, favMusician) {
  console.log(this.firstname, this.age, hobby, favMusician);
}

const user1 = {
  firstname: 'rahul',
  age: 23,
};

const user2 = {
  firstname: 'mohit',
  age: 15,
};

// If I want to call about funtion for "user2" but about function is not present in "user2" then I will use "user1.about.call(name of object)" to define the value of this as "user2"
about.call(user2, 'programming', 'himself'); // borrowing about function of user1

/*********** APPLY ************/
about.apply(user2, ['playing video game', 'mozart']);

// apply does the same thing as call, It is just take an array as an argument

/************ BIND ********/
const func = about.bind(user1, 'guitar', 'not decided');
console.log('func: ', func);
func();

// bind returns a function which we can use in future

// don't do this MISTAKES

const newUser = {
  firstname: 'ankit',
  age: 19,
  about: function () {
    console.log(this.firstname, this.age);
  },
};

// newUser.about()
const myFunc = newUser.about;
myFunc(); // it will give "undefined undefined" because it called by myFunc not by newUser (just storing reference of about function)

const myFunc2 = newUser.about.bind(newUser);
myFunc2();
