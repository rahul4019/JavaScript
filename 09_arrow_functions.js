const user1 = {
    firstname: "ankit",
    age: 19,
    // arrow function takes it this from its surrounding (one level above from it)
    about: () => {
        // arrow functions don't have this keyword
        console.log(this.firstname, this.age)
    }
}

user1.about.call(user1); // you can't change this of ARROW function

