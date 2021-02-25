const form = document.querySelector('form')

form.addEventListener('submit', event =>{
    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    saveForm(title, text, description)
})
// Spred
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data //spred разворачивать объекты. Передать в них все поля?
//     }
//     console.log('Form Data', formData)
// }

// Rest
function saveForm(...args) { // для сбора всех параметров

    const [title, text, description] = args

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description

    }
    console.log('Form Data', formData)
}