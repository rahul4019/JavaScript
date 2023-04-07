let array1 = ['item1', 'item2']
let anotherArray = ['item3', 'item4']

// slice method 
let array2 = array1.slice(0)

// concat method
let array3 = [].concat(array1)

// spread opeartor
let array4 = [...array1, ...anotherArray]

console.log(array4)