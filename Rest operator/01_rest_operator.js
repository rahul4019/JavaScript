// rest parameters

/* function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(1, 2, 3, 4, 5);

function sum(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  console.log(sum);
  console.log(Array.isArray(nums));
}
 
sum(1, 2, 3, 4, 5, 6, 7);
 */

// PARAMETER DESTURCTURING
/* 
const person = {
  "name": 'Rahul',
  age: 24,
}

const printDetails = ({name, age}) => {
  console.log(name)
  console.log(age)
}

printDetails(person) */

const obj = {
  name: '',
  id: Date.now() * Math.random(),
};

const user1 = {...obj,name:'rahul' }
const user2 = {...obj,name:'amit' }
const user3= {...obj,name:'jitender' }

console.log(user1)
console.log(user2)
console.log(user3)
