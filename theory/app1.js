// 1 переменные
// camelCase
const firstName = 'Vladilen'
// const age = 26 // number

// const  = 'private'
const $ = 'some value'
// const if = 'mkej' // err
const withNum5 = '5'

// 2 Мутирование
console.log('Имя человека: ' + firstName + ', а возраст ' + age)

const lastName = prompt('Введите фамилию') // типо как инпут в питоне, только запрашивает данные через окно alert
alert(firstName + '' + lastName)

// 3 операторы

const currentYear = 2020
const birthYear = 1993

// const age = currentYear - birthYear
// ну само собой все базовые операции + - * /
console.log(currentYear++) // сначала выведет в консоль переменную а потом уже прибавит к ней 1
console.log(--currentYear) // сначала отнимет от переменной, а потом её выведет в консоль
// с+=a === c = c + a. Так же и для всех + - * и /

// 4 типы данных
const isProgrammer = true // boolean
const name = 'Dima' // string
const age = 26 // number
let x // undefined
console.log(typeof x) // - выведет тип переменной

//5 приоритет операторов
const fullAge = 26
const birthYear = 1993
const currentYear = 2020

const isFullAge = currentYear - birthYear >= fullage // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6 условные операторы
const courseStatus = 'pending'
if(courseStatus === 'ready'){
   console.log('Курс готов')
} else if (courseStatus === 'pending'){
   console.log('Курс в разработке')
} else{
   console.log('Курс не получился')
}

const num1 = 42
const num2 = '42'
console.log(num1 == num2) // true - потому что приводит к одному типу, строке. А чтобы не приводилось, через ===

const isReady = true

// if(isReady){
//    console.log('Всё готово')
// } else {
//    console.log('Всё не готово')
// }
isReady ? console.log('Всё готово'): console.log('Всё не готово') // тернарные выражения

// 7 Булевая логика

// 8 Функции

function calculate(year) {
   return 2020 - year
}
const myAge = calculate(1993)
console.log(myAge) //27

function logInfoAbout(name, year) {
   const age = calculate(year)
   console.log('Человек по имени' + name + age)
}
logInfoAbout('Дима', 1993)

// 9 Массивы
const cars = ['Мазда', 'Мерседес', 'Форд']
cars[cars.length] = 'Volkswagen'

// 10 Циклы
const cars = ['Мазда', 'Мерседес', 'Форд']
// for (let i = 0; i < cars.length; i++){

// }
for (let car of cars){

}

// 11 Объекты
const person = {
   firstName: 'Dima',
   lastName: 'Sobolev',
   year: 1996,
   languages: ['ru', 'en', 'sk'],
   greet: function () {
      console.log(greet)
   }
}