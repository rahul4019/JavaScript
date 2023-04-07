let arr = [1, 2, 3, 4, 5, 12, 10, 20, 90]
// let num;

// while (num != 0) {
//     num = prompt("Enter a number");
//     arr.push(Number.parseInt(num));
// }


// let newArr = arr.filter((val) => {
//     if( val%10 == 0) {
//         return val;
//     }
// })

let newArr = arr.map((val) => {
    return val * val;
})
console.log(newArr);