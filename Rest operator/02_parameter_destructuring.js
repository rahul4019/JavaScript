// const person = {
//     firstName: 'rahul',
//     gender: 'male', 
// }

// function printDetails({firstName, gender} = obj) {
//     console.log(`fistname: ${firstName}`)
//     console.log(`gender: ${gender}`)
// }

// printDetails(person)

const newobj = {
    text: '',
    completed: false,
    id: Date.now() * Math.random(),
}

const newTodo = {...newobj,text:'rahul'};
const newTodo1 = {...newobj,text:'gaurav'};
const newTodo2 = {...newobj,text:'vikash'};

console.log(newTodo)
console.log(newTodo1)
console.log(newTodo2)
