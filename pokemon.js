let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let textInput = document.querySelector("#inputBar").value
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonHp = document.querySelector("#pokemonHp")
    let pokemonType = document.querySelector("#pokemonType")
    let pokemonAbility = document.querySelector(".pokemonAbility")


    //Axios call goes here
    //remember to use Await!
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
    //DOM Setters go here
    pokemonName.innerText = response.data.name + '!';
    pokemonImage.innerHTML = `<img src=${response.data.sprites.other['official-artwork'].front_default} />`;
    pokemonHp.innerText = "HP: " + response.data.stats[0].base_stat;
    pokemonType.innerText = "Type: " + response.data.types[0].type.name;
    pokemonAbility.innerText = "Primary Ability: " + response.data.abilities[0].ability.name;
})

