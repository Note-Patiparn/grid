/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/ 

async function getCategories (count, offset) {
    let getJeopardyPromise = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`);
    let data = await getJeopardyPromise.json()
    console.log(data)
    return data
}
 
function getCategoriesHtml (category) {
    return `<div class="my-category-title">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
        `
}

function getClueHtml(clueValue) {
    return ` <div class="my-cate-clue" style="grid-row: ${clueValue / 100 + 1};">$${clueValue}</div>`
}

getCategories(5)
    .then(categories => {
        document.body.innerHTML = 
        `
        <div class="board">
            ${categories.map(getCategoriesHtml).join('')}
        </div> 
        `
    })

