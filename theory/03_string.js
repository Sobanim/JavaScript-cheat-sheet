// Строки
const name = 'Dima'
const age = 23

function getAge() {
   return age
}

// const output = 'Привет, меня зовут ' + name + ' и мой возраст' + age + ' лет.'
const output = `Привет, меня зовут ${name != 'Dima'} и мой возраст ${getAge()}` // можно писать тернарные выражения
console.log(output);

const name = 'Dima'
console.log(name.lenght);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('ma')); // присутствует ли данный кусок стркои в строке. Если да, то вернёт число, с которого начинается этот кусок. Если нет, вернёт -1
console.log(name.startWith('di')); // вернёт ложь, потому что стартует с большой буквы
console.log(name.toLowerCase().startWith('di')); // уже true
console.log(name.endtWith('ma'));
console.log(name.repeat(3)); // повтор 3 раза

const string = '   password   '
console.log(string.trim()); // уберает все пробелы, есть ещё trimLeft, trimRight

function logPerson(s, name, age) {
   if (age < 0){
      age = 'Ещё не родился'
   }
   return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`
}
const personName = 'Дмитрий'
const personName2 = 'Максим'
const personAge = 23
const personAge2 = -3

const output = logPerson`Имя : ${personName}, возраст ${personAge}!`
const output2 = logPerson`Имя : ${personName2}, возраст ${personAge2}!`


console.log(output);
