// Promise.resolve
// Promise.chaining

/* const myPromise = Promise.resolve(5)
myPromise.then((value)=> console.log(value))
 */

/**** then method always returns promise *****/

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value; // **** It's returning a PROMISE not a value
  })
  // we can chain it further
  .then((value) => {
    console.log(value);
    return (value += "hi");
  })
  .then((value) => console.log(value));
