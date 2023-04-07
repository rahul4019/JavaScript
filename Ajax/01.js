// ** AJAX : asynchronous JavaScript and XML

// We have three most common ways to create and send request to server
/* 
    1. xmlHTTPRequest (old way of doing)
    2. fetch API ( new way of doing)
    3. axios (third party library)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
// console.log(xhr);

/* 
    xhr.readystate has four stages
     0 => Request has been not opened yet (unsent)
     1 => Request has been opened 
     2 => Headers received, send() has been called
     3 => downloading response text, holds partial data
     4 => Done, The operation is complete
 */

//** Step 1 */
console.log(xhr.readyState);
xhr.open('GET', URL);
console.log(xhr.readyState);

/* xhr.onreadystatechange = function () {
  //   console.log(xhr);
  if (xhr.readyState === 4) {
    const response = xhr.response;
    console.log(typeof response);
    const parsedResponse = JSON.parse(response); // converts the string to JSON
    console.log('Parsed response: ', typeof parsedResponse);
  }
}; */

// ** onload works when readystate becomes 4
xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log('data: ', data);
};

xhr.send();
