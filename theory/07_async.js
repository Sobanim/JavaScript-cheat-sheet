// Event Loop

// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
// clearTimeout(timeout) // чистить таймаут
//
// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 1000)
// // clearInterval(timeout) // чистить интервал

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay(() => {
//     console.log('After 2 sec')
// }, 2000)

// Промисы

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Что-то пошло не так. повторите попытку')
        }, wait)
    })
    return promise
}

// delay(1000)
//     .then(() => {
//         console.log('After 2 sec')
//     })
//     .catch( err => console.error(err))
//     .finally( () => console.log('finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))
getData().then(data => console.log(data))

async function asynExample() {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
}