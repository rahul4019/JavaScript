const user = {
    firstname: "rahul",
    age: 23,
    about: function() {
        console.log(this.firstname, this.age)
    }
}

// Short Syntax
const user1 = {
    firstname: "rahul",
    age: 23,
    about() {
        console.log(this.firstname, this.age)
    }
}

user1.about()
