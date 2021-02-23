const createPost = (title, text, date = new Date().toLocaleDateString()) => {
    return {
        title, // если равны ключ и значения
        text: text,
        date: date
    }
}

const post = createPost('Скоро новый год', 'Скоро будет 2021')
console.log(post)