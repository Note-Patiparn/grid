

async function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    let data = await response.json();
    console.log(data)
    return data
}

function getShowHtml(show) {
    return `<div class="tv-show">
        <div class="tv-show-title">
            ${show.name}
        </div>
        
        <div class="tv-show-summary">
            ${show.summary}
        </div>
    </div>`
}

function displayShow(shows) {
    document.body.innerHTML = `<div class="tv-shows">
        ${shows.map(show => getShowHtml(show.show)).join('')}
    </div>` 
}


findShow("office")
    .then(displayShow)
    .catch(err => console.error(err))
