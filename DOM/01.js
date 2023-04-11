// DOM

console.log(window.document);
console.dir(window.document);

// const mainHading = document.getElementById('main-heading') // returns an object
const mainHading = document.querySelector('#main-heading');
mainHading.style.color = 'Purple';

const buttons = document.querySelectorAll('.btn'); // gives a node list
console.log(buttons);

mainHading.textContent = "Text Content!" // gives all the text even if some part of text is hidden
mainHading.innerHTML = "inner HTML" // gives only visible text

