const users = [
  { user_id: 913, firstName: "rahul", gender: "male" },
  { user_id: 159, firstName: "gaurav", gender: "male" },
  { user_id: 828, firstName: "vishal", gender: "male" },
];

// for (let user of users) {
//     console.log(user.firstName)
// }

// Nested Destructring

const [user1, user2, user3] = users;
// console.log(user1);

// destructuring object properties
const [{ firstName: name }, , { gender }] = users;

console.log(name, gender)