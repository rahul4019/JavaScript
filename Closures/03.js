function myFunction (power) {
    let value = 3;
    for (let i = 0; i < power ; i++) {
        value *= value; 
    }
}

const square = myFunction(2);

console.log(square)