function func() {
  let count = 0;
  return function () {
    if (count < 1) {
      console.log('first call');
      count++;
    } else {
      console.log('second call');
    }
  };
}

const myFunc = func();
myFunc();
myFunc();
