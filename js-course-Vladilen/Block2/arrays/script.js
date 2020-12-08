let cars = [
    'Ford', 'Mazda', 'Kia', 'BMW'
]

cars.push('Audi') // добавит в конец массива

cars.pop() // удаляет последний элемент из массива
let audi = cars.pop() // возвращает и удаляет последний элемент

let ford = cars.shift() // удаляет и возвращает первый элемент
console.log(cars, ford)

cars.unshift() // добавляет в начало

cars.indexOf('Kia') //будет искать в массиве элемент Киа. Если -1 знач не нашли. Если нашли вернёт номер элемента