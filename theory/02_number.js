// 1 Number
const num = 42
const float = 23.23
const pow = 10e3 // 10 000 - 10 в 3 степени

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY) // 1/0 = бесконечность
console.log(Number.NEGATIVE_INFINITY) 
console.log(Number.NaN) // Not a Number 2/undefined
// console.log(Number.isNaN())

const stringInt = '40'
const stringFloat = '40.42'
console.log(parseInt(stringInt) + 2); // 42
console.log(Number(stringInt) + 2); // 42
console.log(+stringInt + 2);

console.log(parseFloat(stringFloat) + 2);
// аналогично

console.log(0.4 + 0.6); // 0.600000000001
console.log(+(0.4 + 0.2).toFixed(1));// 0.6
console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// 2 BigInt - новый тип данных, который больше max_safe_integer
console.log(typeof(9007199254740991n)) // bigint

// console.log(10n - 4); // error
console.log(parseInt(10n)-4);
console.log(10n - BigInt(4));
console.log(5n / 2n); // 2n

// 3 Math
console.log(Math.pow(5, 3)); // 5 в степени 3
console.log(Math.abs(-42)); // модуль
console.log(Math.floor(4.9)); // 4, округляет в меньшую сторону
console.log(Math.сeil(4.9)); // 5, округляет в большую сторону
console.log(Math.round(4.4));
console.log(Math.trunc(4.9));

// 4 Example
function getRandomBetwen(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetwen(10, 42))
