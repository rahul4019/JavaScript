// let Name = "rahul\""
let Name = "rahul";
// console.log(Name.length);

// console.log(Name.toUpperCase());
// console.log(Name.toLowerCase());

// console.log(Name.slice(2,4));
// console.log(Name.slice(2));

// console.log(Name.replace("ra","pa"));

let friend = "gaurav";
// console.log(Name.concat(" is friend of ", friend, " ok"))

let friend2 = "    Abhishek  ";
// console.log(friend2.trim()); // will remove spaces from begining as well as from end

let newString="";
for (const char of Name) {
    newString += char;
}

console.log(newString);

/* console.log(Name.includes("t"))
console.log(Name.startsWith("p"))
console.log(Name.endsWith("l"))
 */

let str = "Please give Rs 1000"
let amount = str.slice("Please give Rs ".length);
console.log(amount);
console.log(typeof(amount));