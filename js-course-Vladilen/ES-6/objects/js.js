const createCar = (name, model) => ({name, model}) // стрелочная функция возвращает объект

const ford = createCar('Ford', 'Focus')
console.log(ford)

const yearField = 'year'
const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,

    logFields(){
        const {name, year, model} = this // деструктуризация, чтобы убрать в log - this
        console.log(name, model, year)
    }
}

console.log(bmw)
bmw.logFields()

// --- Пример деструктуризации ---
// const year = bwm.year === const {year} = bmw //