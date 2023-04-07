// * Synchronous programming (Blocking) VS Asynchronous programming (Non Blocking)

// ** Synchronous programming
/**
 * ? In synchronous programming code will be executed line by line
 * ? JavaScript is a Synchronous programming language
 */
console.log('Script starts');

/* for (let i = 0; i < 1000; i++) {
  console.log('inside for loop');
} */

// ** Asynchronous programming

// setTimeout is not a Javascript feature. It is provided by the Browser
const id = setTimeout(() => {
  console.log('Inside timeout');
}, 2000); // time is in milisecond

console.log('SetTimeout id:  ', id);
console.log('Clearing timeout');
clearTimeout(id);

/*
 * SetTimeout function will be given to the browser and the browser will be counting
 * the time for it and after completion of time it will be pushed to callback queue (Event queue)
 */

for (let i = 0; i < 100; i++) {
  console.log('...');
}

console.log('Script ends');
