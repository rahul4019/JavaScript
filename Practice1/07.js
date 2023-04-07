// call bind and apply

const user1 = {
  firstName: 'rahul',
  age: 23,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  },
};

user1.about('watching web series', 'himself');

const user2 = {
  firstName: 'mohit',
  age: 15,
};

user1.about.call(user2, 'coding', 'rahul');
user1.about.apply(user2, ['playing cricket', 'pritam']);

// BIND

const func = user1.about.bind(user2, 'coding', 'not decided');
console.log(func);

func()

// Arrow functions

