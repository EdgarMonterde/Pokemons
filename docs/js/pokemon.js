let contain = document.getElementById("pokemon-list");


function pokemons(idpok) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idpok}`).then(function (response) {
        response.json().then(function (pokemon) {
            printPokemon(pokemon);
        })
    })
}

function pokemonsIdRandoms() {
    let idRandom = Math.round(Math.random() * 200);

    pokemons(idRandom);
}

function printPokemon(pokemon) {
    let containPok = contain.querySelector("#pokemon-view");

    let img = containPok.getElementsByTagName("img")[0];
    img.setAttribute("src", pokemon.sprites.front_default);
    
    let id = containPok.getElementsByTagName("span")[0];
    let name = containPok.getElementsByTagName("span")[1];
    let power = containPok.getElementsByTagName("span")[2];
    let ability = containPok.getElementsByTagName("span")[3];
    let bestMove = containPok.getElementsByTagName("span")[4];
    let hp = containPok.getElementsByTagName("span")[5];
    let atack = containPok.getElementsByTagName("span")[6];
    let defense = containPok.getElementsByTagName("span")[7];
    let speed = containPok.getElementsByTagName("span")[8];

    id.textContent = pokemon.id;
    name.textContent = pokemon.name;
    power.textContent = pokemon.base_experience;
    ability.textContent = pokemon.abilities[0].ability.name;
    bestMove.textContent = pokemon.moves[0].move.name;
    hp.textContent = pokemon.stats[0].base_stat;
    atack.textContent = pokemon.stats[1].base_stat;
    defense.textContent = pokemon.stats[2].base_stat;
    speed.textContent = pokemon.stats[5].base_stat;
}
pokemonsIdRandoms();

// pokemons(26);