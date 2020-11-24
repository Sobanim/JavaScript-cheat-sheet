// 1 Функции
// Function Declaration - можем обращаться когда захотим
function greet() {
   console.log('Привет - ', name);
}
// Function Expression - сначала нужно проинициализировать функцию а потом её вызывать
const greet2 = function greet2() {
   console.log('Привет 2 - ', name2);
   
}
greet('Лена')
greet2('Лена')

console.dir(greet) // функция это объект в JS

// 2 Анонимные функции
let counter = 0
const interval = setInterval( function () { // setTimeout есть ещё
   if (counter === 5){
      clearInterval(interval)
   } else{
      console.log(++counter);
   }
}, 1000)

// 3 Стрелочные функции
function greet() {
   console.log('Привет - ', name);
}

const arrow = (name, age) => {
   console.log('Привет - ', name);
}

const arrow2 = name => console.log('Привет - ', name);

arrow2('Dmirtiy')

const pow2 = num => num ** 2

console.log(pow2(5));

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => (a + b)
console.log(sum(41));

function sumAll(...all) {
   const result = 0
   for (let num of all){
      result += num
   }
   return result
}

const res = sumAll(1, 2, 3, 4, 5) // соберает все данные в массив [1, 2, 3, 4, 5]
console.log(res); // 15

// 5 Замыкание
function createMember(name) {
   return function (lastName) {
      console.log(name + lastName);
   }
}
const logWithLastName = createMember('Dmitriy')
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Kuznezov'))
