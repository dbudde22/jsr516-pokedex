let button = document.querySelector("#searchButton")

let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonHp = document.querySelector("#pokemonHp")
let pokemonType = document.querySelector("#pokemonType")
let pokemonAbility = document.querySelector(".pokemonAbility")

let pokeInput = document.querySelector(".pokeInput")
let inputBar = document.querySelector("#inputBar");
let infoText = document.querySelector("#infoText");

window.addEventListener('load', async ()=> {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    setPokeCard(response.data);
})

pokeInput.addEventListener('submit', (event) => {
        pokeSearch();
        event.preventDefault();
})

async function pokeSearch() {
    let textInput = inputBar.value;

    //Axios call goes here
    //remember to use Await!
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
        .catch(error => {
            infoText.innerText = "We couldn't find that Pokemon. Double-check your spelling and try again!";
        })
    //DOM Setters go here
    setPokeCard(response.data);
    inputBar.value = "";
    infoText.innerText = "";
}

function setPokeCard(data) {
        pokemonName.innerText = data.name + '!';
        pokemonImage.innerHTML = `<img src=${data.sprites.other['official-artwork'].front_default} />`;
        pokemonHp.innerText = "HP: " + data.stats[0].base_stat;
        pokemonType.innerText = "Type: " + data.types[0].type.name;
        pokemonAbility.innerText = "Primary Ability: " + data.abilities[0].ability.name;
}