// **** PROMISE

// const bucket = ['rice', 'wheat', 'salt'];

// const myPromise = new Promise((resolve, rejcet) => {
//   if (bucket.includes('rice') && bucket.includes('sal')) {
//     resolve('promise resolved!');
//   } else {
//     rejcet('promise rejected!');
//   }
// });

//  myPromise.then((msg) => {
//     console.log(msg)
//  }).catch(err => console.log(err))

// console.log('first')

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => console.log('resolved!'))
  .catch(() => console.log('rejected!'));
