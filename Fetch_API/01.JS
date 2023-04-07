// ** Fetch

// const URL = 'https://jsonplaceholder.typicode.com/postss';
const URL = 'https://jsonplaceholder.typicode.com/posts';
// const whatIsThis = fetch(URL);

// console.log(whatIsThis); // returns a promise

const Posts = fetch(URL)
  .then((res) => {
    if (res.ok) {
      return res.json(); // for parsing the string
    }
    throw new Error('Something went wrong!');
  })
  .then((data) => console.log(data))
  .catch((err) => {
    // ** If the url is wrong, It will not show in the catch block because the promise is fullfiled
    // ** Catch block will be executed when there is a network related error (problem)
    console.log('Inside catch block');
    console.log(err);
  });

// ** Fetch for POST requests

const Posts2 = fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json(); // for parsing the string
    }
    throw new Error('Something went wrong!');
  })
  .then((data) => console.log("DATA: ", data))
  .catch((err) => {
    // ** If the url is wrong, It will not show in the catch block because the promise is fullfiled
    // ** Catch block will be executed when there is a network related error (problem)
    console.log('Inside catch block');
    console.log(err);
  });
