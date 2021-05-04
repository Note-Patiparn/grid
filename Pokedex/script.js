
async function pokeDex() {
    let dataPromise = await fetch('./pokemon.json')
    let data = await dataPromise.json()
    console.log(data)
    return data 
}

function getPokemonHtml(aPokemon) {
    return `
    <div class="a-pokemon">
        <div class="a-pokemon-id">${aPokemon.id}</div>
        <div class="a-pokemon-name">${aPokemon.name.english}</div>
        <div class="a-pokemon-type">${aPokemon.type.join (' / ')}</div>
        <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat">Defese: ${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>
        <div class="a-pokemon-multi-langauge-name">Japanese: ${aPokemon.name.japanese}</div>
        <div class="a-pokemon-multi-langauge-name">Chinese: ${aPokemon.name.chinese}</div>
        <div class="a-pokemon-multi-langauge-name">French: ${aPokemon.name.french}</div>
        
    </div>
    `
}



function displayPokedex(allPokemon) {
    return document.body.innerHTML = `<div class="my-pokedex">
        ${allPokemon.map(aPokemon => getPokemonHtml(aPokemon)).join('')}
        </div>`
}

pokeDex().then(displayPokedex)