const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// const newArray = [...array1, ...array2]

const myString = "rahul"

// spreads the string 
const newArray = [...myString]

/***** Spread operator in object ********/

// objects can't have two similar keys
const obj1 = {
    key1: "value1",
    // key1: "value1",
    key2: "value2 "
}

const obj2 = {
    key1: "other value",
    key3: "value3",
    key4: "value4"
}

// const newObject = {...obj1, ... obj2, key5: "value5"}
const newObject = {..."abc"} // index would be key and spreaded string would be value

// could be used for problem solving 
const indexedAlphabets = {...'abcdefghijklmmopqurstuvwxyz'}

console.log(newObject)
console.log(indexedAlphabets)