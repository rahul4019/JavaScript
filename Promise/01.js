// Promise

const bucket = ["coffee", "chips", "vegetables", "salts", "rice"];

//                             executer function
const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject("couldn't complete!");
    // reject(new Error("something missing from bucket")) // error object
  }
});

// produce

// consume
// how to consume?

/* myPromise.then(
  // when promise will be resolved
  (myFriedRice) => {
    console.log("let's eat", myFriedRice);
  },
  // when promise will be rejected
  (err) => {
    console.log(err);
  }
); */

myPromise.then(
  // when promise will be resolved
  (myFriedRice) => {
    console.log("let's eat", myFriedRice);
  },
).catch((err) => {
    console.log(err)
})

// Promise is a browser's feature not javascript's

console.log("first")
