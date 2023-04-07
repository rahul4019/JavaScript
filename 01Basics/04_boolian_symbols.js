// boolean

// true false

let score = 100;

if (score === 100) {
  // console.log("great score");
}

// false values

/* undefined
null
0
-0
NaN
"" */

console.log(typeof(false.toString()));

// null: special object whose value is "no object".

// console.log(typeof null);
// console.log(typeof NAN);
// console.log(typeof undefined);

/* undefined is predefined global constant
 null is a language keyword

 Both define absence of value 
 
 ==, === show the difference
 */

// Symbol

String("Rahul");
("Rahul");

// it gives always unique value
let mySym = Symbol("p1");
let mySym2 = Symbol("p1");

// it gives always same value
let priority = Symbol.for("p2");
let priority2 = Symbol.for("p2");

// console.log(priority === priority2);
// console.log(mySym == mySym2);

// console.log(mySym);

const WIN = Symbol("WINDOW");
const AILE = Symbol("AILE");
const MIDDLE = Symbol("MIDDLE");

const crew = "WINDOW";

function getSeat(getValue) {
  switch (getValue) {
    case WIN:
      return "Seat is alloted";
    case AILE:
      return "Seat is alloted";
    case MIDDLE:
      return "Seat is alloted";

    default:
      console.log("No seat alloted");
  }
}

console.log(getSeat(crew));

// react
// card, card

// Global objects
/* constants like : undefined, NaN
function like: isNaN(), parseInt(), eval() 
Construcor like: Date(), STring(), Object()
Math, JSON */

/* these are not reserved keywords , null is a reserved keyword

global object should be treated as reserved  */

// Node Global and Browser Global

/* node: global
browser: window */

console.log(this);

// E2020 globalThis

// console.log(globalThis);