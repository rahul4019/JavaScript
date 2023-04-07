// object destructuring

const user = {
    name: 'rahul',
    age: 23,
    hobby: 'programming',
    address: 'new delhi-10021'
}

// we destructure with different variable name
// const {name, age, hobby: passion} = user;

const {name, age, ...restPorps} = user;


console.log(name, age, restPorps)