// function returning promise

function ricePromise() {
  const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

  return new Promise((resolve, reject) => {
    if (
      bucket.includes('vegetables') &&
      bucket.includes('salt') &&
      bucket.includes('ricse')
    ) {
      resolve('Fried Rice');
    } else {
      reject("couldn't complete!");
    }
  });
}

ricePromise()
  .then(
    // when promise will be resolved
    (myFriedRice) => {
      console.log("let's eat", myFriedRice);
    }
  )
  .catch((err) => {
    console.log(err);
  });
