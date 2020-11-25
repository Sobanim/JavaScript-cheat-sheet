// Массивы
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
// const people = [
//    {name: 'Dima', budget: 4200},
//    {name: 'Elena', budget: 3500},
//    {name: 'Vika', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Renault') // положить в массив в конец
// cars.unshift('Volga') // положить в массив в начало

// const firstcar = cars.shift() // удаляет первый элемент и возвращает его
// const lastCar = cars.pop() // удаляет последний элемент и возвращает его
// console.log(firstcar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse()); // переворачивает весь массив - мутирует

// console.log(cars.indexOf('BMW')); // возвращает индекс элемента массива
// const index = people.findIndex(function(person){ // поиск по индексу в сложном массиве
//    return person.budget === 3500
// })
// const person = people.find(function(person){ // поиск по массиву, конкретного значения
//    return person.budget === 3500
// })
// const person = people.find(person => person.budget === 3500)

// let findedPerson
// for(const person of people){
//    console.log(person);
//    if (person.budget === 3500) {
//       findedPerson = person
//    }
// }
// console.log(findedPerson);

// console.log(cars.includes('Mazda')) // наличие элемента в массиве, истина - ложь
// const upperCaseCars = cars.map(car => { // map ВСЕГДА возвращает новый массив
//    return car.toUpperCase()
// })
const pow2 = num => num**2
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib);
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)





// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// // сначала разделяем строчку на буквы и закидываем это всё в массив. Потом переворачиваем, и опять преобразовуем в строчку
// console.log(reverseText);

const people = [
      {name: 'Dima', budget: 4200},
      {name: 'Elena', budget: 3500},
      {name: 'Vika', budget: 1700}
   ]
const allBudget = people
   .filter(person => person.budget > 2000)
   .reduce((acc, person) => {
   acc += person.budget
   return acc
}, 0)
console.log(allBudget);