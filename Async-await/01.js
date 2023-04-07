//**  Async / await

const URL = 'https://jsonplaceholder.typicode.com/posts';

// If asycn keyword has been used, It function would always return a promise
const posts = async () => {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await res.json();

  return data;
};

console.log(posts()); // posts() will only return a promise

posts()
  .then((mydata) => {
    console.log('mydata: ', mydata);
  })
  .catch((err) => console.log(err));
