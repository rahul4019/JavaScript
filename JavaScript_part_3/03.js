//**  CALLBACKS
/* 
function myFunc(callback) {
  console.log('This function is handling operation 1');
  callback();
}

function myFunc2() {
  console.log('This function is handling operation 2');
}

myFunc(myFunc2); */
// myFunc2();

function getTwoNumsAndAdd(num1, num2, callback) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    callback(num1, num2);
  } else {
    console.log('Either or both of them are not number');
    return; 
  }
  console.log(num1, num2);
}

function addTwoNums(num1, num2) {
  console.log(num1 + num2);
}

// getTwoNumsAndAdd('4', '5', addTwoNums);
getTwoNumsAndAdd(4, 5, addTwoNums);
