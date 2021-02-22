let createCounter = function (counterName) {
    let counter = 0

    return {
        incremet: function () {
            counter++
        },
        decriment: function () {
            counter--
        },
        getCounter: function () {
            return counter
        }
    }
}

let counterA = createCounter('Counter A')
let counterB = createCounter('Counter B')

counterA.incremet()
counterA.incremet()
counterA.incremet()

counterB.decriment()
counterB.decriment()
