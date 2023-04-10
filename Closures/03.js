/* function calculatePowerOfNum(power) {
  return function (number) {
    return number ** power
  };
}

const square = calculatePowerOfNum(2);
const ans = square(3);
console.log(ans)

const cube  = calculatePowerOfNum(3);
const output = cube(3)
console.log(output)
 */

// Short Syntax
const calculatePowerOfNum = (power) => (number) => number ** power;

const square = calculatePowerOfNum(2);
const ans = square(3);
console.log(ans);

const cube = calculatePowerOfNum(3);
const output = cube(3);
console.log(output);
