const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] // старый метод, не юзать
// const heading2 = document.getElementsByClassName('h2-class')[0] // старый метод, не юзать
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') //всегда первый попавшийся элемент

// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]

setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'green')
}, 1000) 

setTimeout(() => {
    addStylesTo(heading2, 'И всё получиться!', 'blue', '2rem')
}, 2000)

const link = heading3.children[0]
link.addEventListener('click', () => {
    event.preventDefault()
    console.log('Click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})
setTimeout(() => {
    addStylesTo(link, 'Практикуйся')
}, 1500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'yellow'
    node.style.padding = fontSize
    node.style.display = 'block'
    node.style.width = '100%'
    node.style.transition = '0.15s'
    // falsy: '', undefined, null, 0, false
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if(heading.style.color === 'red'){
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else{
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}
heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'red'){
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else{
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#000'
    }
})
