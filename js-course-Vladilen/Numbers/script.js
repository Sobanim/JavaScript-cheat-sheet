console.log(42)
console.log(1.5)
console.log(-8/3) // 2.6666
console.log(0xAB)
console.log(2e3)// e это как 10 в степени какой-то
console.log(NaN) // not a number
console.log(typeof NaN) // Number
console.log(123 / 0) // infinity

let fortyTwo = 42
console.log(fortyTwo.toString())

let decimal = 8 / 3
console.log(+decimal.toFixed(1)) // оператор + приводик к строке
console.log(parseFloat(decimal.toFixed(2))) // парсит и выдаёт с десятичными
console.log(parseInt(decimal.toFixed(2))) // переводит в инт

console.log(isNaN(45))