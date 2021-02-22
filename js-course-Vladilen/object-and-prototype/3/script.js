let person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
}

// for (let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log(person[key])
//     }
// }

Object.keys(person).forEach(function (key) { // не идет по прототипам, затрагивает только собственные ключи
    console.log(person[key])
})