// ** PROMISE

const bucket = ['coffee', 'rice', 'salt', 'chips', 'vegetables'];

// ** Promise is a value that we don't know for now but, we would know in future

const myPromise = new Promise((resolve, reject) => {
  resolve('Promise resolved!');
});

setTimeout(() => {
    console.log('before consuming promise!')
}, 0);

// Browser will consume our promise
myPromise.then((result) => {
  console.log(result);
});

/// ** Microtask queue will be given preference over callback queue
