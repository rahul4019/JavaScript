class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  age() {
    return `${this.age}`;
  }
}
/* 
  const animal1 = new Animal('Tom', 2);
  console.log(animal1);
  console.log(animal1.eat())
   */

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // * used for invoking constructor of parent class
    this.breed = breed;
  }

  about() {
    return `${this.name} is ${this.age} years old and belongs to ${this.breed} breed`;
  }

  eat() {
    return `${this.name} is eating since morning.`
  }
}

const tommy = new Dog('kalu', 3, 'mongrel');
console.log(tommy.age);
console.log(tommy);
console.log(tommy.about());
console.log(tommy.eat());
