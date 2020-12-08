let person = {
    name: 'Vasilii',
    year: 1990,
    family: ['Elena', 'Ihor'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    calculateAge: function () {
        this.age = 2018 - this.year
    }
}
console.log(person.car.model)
let field = 'car'
console.log(person[field].year)

person.year = 1993

person.calculateAge()
console.log(person)