//  let name = 'rahul';

//  function printName() {
//     console.log(name);
//  }

//  name = 'gaurav'

//  printName()

//  const outer = () => {
//     const name = 'inner function';
//     const inner = () => {
//         console.log(name)
//     }
//     inner();
//  }
//  outer()

// **** Function inside another function having access of variables outer function is called clousers.

// function outerFunction(outerVariable) {
//   return function innerfunction(innerVariable) {
//     console.log(`Outer variable ${outerVariable}`);
//     console.log(`Inner variable ${innerVariable}`);
//   };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');

// function outerFunc(outerVar) {
//   return function innerFunc(innerVar) {
//     console.log('outer variable is ' + outerVar);
//     console.log('inner variable is ' + innerVar);
//   };
// }

// const newFunc = outerFunc('Outer');
// newFunc('Inner');

// document.getElementById('orange').onclick = function () {
//   document.body.style.backgroundColor = 'orange';
// };

// document.getElementById('green').onclick = () => {
//   document.body.style.backgroundColor = 'green';
// };

const changeColor = (color) => {
  return function () {
    document.body.style.backgroundColor = color;
  };
};

document.getElementById('orange').onclick = changeColor('orange');
document.getElementById('green').onclick = changeColor('green');
