// Объекты
const person = {
   name: 'Dima',
   age: 23,
   isProgrammer: true,
   languages: ['ru', 'en', 'sk'],
   // 'complex key': 'Complex Value',
   // ['key_' + 1 + 3]: 'Computed Key',
   greet() { // является методом потому что находиться внутри объекта person
      // console.log('greet from person');
   },
   info(){
      // console.log('this', this);
      console.info('Информация про человека по имени: ', this.name)
   }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person["complex key"])
// console.log(person)
// person.greet()
// person.age++

// person.languages.push('by')

// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person);

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person // аналогично тому, что выше в трёх строчках

// console.log(name, personAge, languages);
// console.log(personAge);

for (let key in person){ // for in - опасен. Работает не только по прототипу но и по ключам
   if (person.hasOwnProperty(key)){
      console.log('key:', key);
      console.log('value:', person[key]);
   }
}
// Object.keys(person).forEach( (key) => {
//    console.log('key:', key);
//    console.log('value:', person[key]);
// })
// console.log();

// Context
// person.info()

const logger = {
   keys(){ // принимать как параметр obj
      console.log('Object Keys ', Object.keys(this));
   }
}
