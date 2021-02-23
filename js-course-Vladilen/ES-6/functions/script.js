// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }
//
// ES-6
// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => new Date().getFullYear() - year
//
// const logAge = year => console.log(new Date().getFullYear() - year)
//
// logAge(1992)
// console.log(getAge(1990))

const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout() {
        window.setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
}