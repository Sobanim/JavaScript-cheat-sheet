// let person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',
//     displayInfo: function (ms) {
//         // let self = this // замкнули this на переменной self
//
//         setTimeout(function () {
//             console.log('Name: ', this.name)
//             console.log('Job ', this.job)
//             console.log('Age ', this.age)
//         }.bind(this), ms)
//     }
// }
// person.displayInfo(500)

function printObject(objName) {
    console.log('Printing object: ', objName)
    for (let key in this){
        if(this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key])
        }
    }
}



let person = {
    firstName: 'MAx',
    job: 'Backend',
    age: 29,
    friends: ['Elena', 'Igor']
}
let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

let printPerson = printObject.bind(person)
printPerson('Person')

printObject.call(car, 'Car')

printObject.apply(person, ['Person'])
