async function bookCollection () {
    let response = await fetch('./library.json')
    let data = await response.json()
    console.log(data)
    let n = 1
    return data.map(book => {
        book.id = n
        n += 1
        return book
    })
}

function getBookHtml(book) {
    return `
    <div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>
    `
}
bookCollection()
    .then(displayLibrary)
    .catch(err => console.errror(err))


function displayLibrary(books) {
    document.body.innerHTML = `
        <div class="my-library">
            ${books.map(getBookHtml).join('')}
        </div>
        `
} 