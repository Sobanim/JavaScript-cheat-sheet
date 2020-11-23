

1. Типы данных

  1. Boolean -> true / false
  2. String -> 'andrew is cool'
  3. Number -> 10 / 10.0
  4. null -> значение пустое
  5. undefined -> переменной нет
  6. Object -> { key: 'value' } / [ 1, 2, 3 ] / etc.
  7. Function -> функция

1. Common things
  == / ===
    == - сравнение только значения ( '1' == 1 => true )
    === - сравнение по типу ( '1' === 1 => false )

1. ES6+

  Template String (`5 + 5 = ${5 + 5}`)
    '5 + 5 = ' + (5 + 5)

  var / let / const

  Деструкторизация
    const user = {
      location: {
        main: {
          city: 'Kharkiv'
        }
      }
    }

    const { location: { main: { city: userCity = 'Krivoy Rog' } = {} } = {} } = user;


2. Условия

  1. if .. else
    if (true) {
      // action
    } else {
      // action
    }

  2. switch .. case
    switch (param) {
      case '1':
        // action;
        break;
      case '2':
        // action;
        break;
      default:
        // action
        break;
    }

  3. тернарный оператор
    <условие> ? < action 1 > : < action 2 >

3. Циклы

  for (let index = 0; index < 10; index += 1) {}

  for (let key in user) {
    console.log(key);
    console.log(user[key]);
  }

  const users = [
    { id: 1, firstName: 'firstName' },
    { id: 2, firstName: 'firstName' },
    { id: 3, firstName: 'firstName' },
    { id: 4, firstName: 'firstName' },
    { id: 5, firstName: 'firstName' },
  ]

  for (let user of users) {
    console.log(user);
  }

  for (let index = 0; index < users.length; index += 1) {
    console.log(users[index]);
  }

4. Функции

  function name (arguments, arguments) {
    // action
  }

  const sum = (a, b) => {
    return a + b;
  }

  sum(1, 2)

  const sum = (a, b) => a + b;

  sum(1, 2)

  function getFirstName({ firstName }) {
    return firstName;
  }

  const getFirstName = ({ firstName = null } = {}) => firstName;

  const user = {
    firstName: 'John'
  }

  console.log( getFirstName( user ) ); // John
  console.log( getFirstName( {} ) ); // null

  function sum (a, b = 20) {
    return a + b;
  }

  function sum (a, b = 20) {
    return a + b;
  }

  sum(1, 2) // 3
  sum(1) // 1 + 20 => 21

  function sum(...args) {
    return args.reduce((acc, obj) => acc + obj, 0)
  }

  sum(1, 2, 3, 4)

4. Полезные методы

  Array.prototype.map() -> преобразовать элемент массива нужным образом
    users.map(({ id }) => id) // [ 1, 2, 3, 4, 5 ]

  Array.prototype.filter() -> фильтрует элементы массива нужным образом
    users.filter(({ id }) => id != 3)

  Array.prototype.reduce() -> суммирует элементы массива нужным образом

    users.reduce(
      (acc, { age }) => acc + age,
      0
    ) // 50

  users
    .filter(({ id }) => id !== 3)
    .map(({ age }) => age)
    .reduce((acc, obj) => acc + obj, 0)

  Array.prototype.forEach() -> пройти по всем элементам массива
    users.forEach((element) => {
      // action
    })

5. Классы

  class Database {
    constructor(username, password) {
      if (username === undefined) {
        throw new Error('Idi otsuda petushok');
      }

      this._username = username;
      this._password = password;
    }

    connect() {
      // action with this._username
    }

    static create(...args) {
      return new Database(...args);
    }
  }

  class MongoDB extends Database {
    connect() {
      // action
    }
  }

  const db = new Database('username', 'password')
  const db2 = Database.create('username', 'password')

6. Промисы

  Promise
    pending    -> когда он не выполнен
    resolved  -> когда выполнен успешно
    rejected  -> когда выполнен с ошибкой

  fetch('https://httbin.org/get')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch(() => {})

  new Promise(( resolve, reject ) => {
    if (true) {//if true?
      resolve();
    } else {
      reject();
    }
  })

7. async / await

  async function main() {
    try {
      const response = await fetch('https://httpbin.org/get');
      const { id } = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

9. Errors
10. XHR
