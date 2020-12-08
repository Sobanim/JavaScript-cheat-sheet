let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')

let score = 0
let isGameStarted = false
let name = ''
let time = ''

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    isGameStarted = true
    $game.style.backgroundColor = 'white'
    $start.classList.add('hide')

    let interval = setInterval(function () {
        let time = parseFloat($time.textContent)

        if(time <= 0){
            clearInterval(interval)
            endGame()
        }else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()
}

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}

function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show($start)
    addDataToTable()
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    hide($timeHeader)
    show($resultHeader)
}

function handleBoxClick(event) {
    if(!isGameStarted){
        return
    }
   if(event.target.dataset.box){
       score++
       renderBox()
   }
}

function renderBox() {
    $game.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = getRandom(20, 100)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

function getRandomColor() {
    let color = Math.floor(Math.random() * (255 - 0) + 0)
    return color
}

document.addEventListener('DOMContentLoaded', function () {
    name = prompt('What is your name?')
    console.log(name)
})

function addDataToTable() {


    let table = document.querySelector('table')
    let row = table.insertRow(1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    cell1.innerHTML = name
    cell2.innerHTML = time
    cell3.innerHTML = score




    // let tr = document.createElement('tr')
    // let nameTable = document.createElement('td')
    // let timeGameTable = document.createElement('td')
    // let scoreTable = document.createElement('td')
    // nameTable.value = name
    // timeGameTable.value = 5
    // scoreTable.value = score
    // tr.insertAdjacentElement('afterbegin', nameTable)
    // tr.insertAdjacentElement('afterbegin', timeGameTable)
    // tr.insertAdjacentElement('afterbegin', scoreTable)
    // table.insertAdjacentElement('afterbegin', tr)

}

// function myCreateFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }
