function func() {
  console.log('Hello world!');
}

func();

/*
 * In javaScript Functions are Functions as well as Objects
 * function = object
 */

console.log(func.name); // tells function's name

// * You can add your own properties to a function
func.myOwnProperty = 'Property provided by me';

console.log(func.myOwnProperty);

/*
 * Function gives us free space which is an object, called "Prototype"
 * Only functions provide prototype property
 */

console.log(func.prototype); // {}

// Let's check with an object
const obj = {
  key: 'value1',
};

func.prototype
  ? console.log('Prototype is present!')
  : console.log('Prototype is not present');

obj.prototype
  ? console.log('Prototype is present!')
  : console.log('Prototype is not present');

func.prototype.abc = 'abc';
func.prototype.xyz = function () {
  return 'xyz function';
};

console.log(func.prototype);
