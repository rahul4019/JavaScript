// String methods

let name = 'Rahul'
// console.log(name.length)
/* 
console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(1,4))
console.log(name.slice(2))
console.log(name.replace('ah','slaj'))
 */

let friend = 'vineet'

console.log(name.concat(' is friend of ', friend, " ok."))

let friend2 = "      hello world !  "

console.log(friend2.trim())

let newstr = ''

for (const char of name) {
    newstr += char;
}
/* 
console.log(newstr)
console.log(newstr.startsWith('R'))
console.log(newstr.endsWith('v'))
console.log(newstr.includes('Rahu'))

 */

let str = "please give me Rs 1000"
let amount = str.slice('please give me Rs '.length)

console.log(amount)
console.log(typeof(amount))

