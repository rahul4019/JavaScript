let dollar = "💲"; // unicode characters are different in length
let love = "❤️";


// console.log(dollar.length);
// console.log(love.length);

// '' "" ``

// escape sequence 

// \n, \u, \'

let myString = "Hello, World";

// console.log(myString.substring(1,4));
// console.log(myString.slice(1,4));
// console.log(myString.slice(-6));


// myString.indexOf("i");
// console.log(myString.indexOf("l",3));
// console.log(myString.lastIndexOf("l"));


myString.startsWith("+91");
myString.endsWith("@ineuron.ai");
myString.includes("test");

myString.toLowerCase(); //gives you a new string
myString.toUpperCase(); //gives you a new string
myString.normalize(); 

// console.log("HDFC334433".padStart(12,"0")) // puts remaining zeros at vacant place

// console.log("*".repeat(15));

let score = 100;

let greeting = `\
${dollar} is at value of ${score}
\u2718
`;

// console.log(greeting);


// let myNewString = `\u2718`.length;
let myNewString = String.raw`\u2718`.length;

// console.log(myNewString);

