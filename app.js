window.addEventListener('DOMContentLoaded', () => 
{
    const ramid = getRandomInt(1, 899);
    fetchData(ramid)
})

const getRandomInt = (min, max) =>
{
    return Math.floor(Math.random() * (max-min)) + min;
}

const fetchData = async (id) =>
{
    try
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        pintarCard(data)
    }
    catch (error)
    {
        console.log(error)
    }
}

const pintarCard = (pokemon) =>
{
    console.log(pokemon)
    const canvas = document.getElementById('pokeCanvas');
    const template = document.getElementById('card__template').content;
    const clone = template.cloneNode(true);
    const fragmento = document.createDocumentFragment();

    clone.querySelector('.recurso__img').setAttribute('src', `${pokemon.sprites.other.dream_world.front_default}`);
    clone.querySelector('.nombre').innerHTML = `${pokemon.name}`;
    clone.querySelector('.tipo').innerHTML = `${pokemon.types[0].type.name}`;
    clone.querySelector('.vida').innerHTML = `${pokemon.stats[0].stat.name}  ${pokemon.stats[0].base_stat}`;
    clone.querySelector('.exp').innerHTML = `Exp ${pokemon.base_experience}`;
    clone.querySelector('.ataque').innerHTML = `${pokemon.stats[1].base_stat}`;
    clone.querySelector('.atkespecial').innerHTML = `${pokemon.stats[3].base_stat}`;
    clone.querySelector('.defensa').innerHTML = `${pokemon.stats[2].base_stat}`;
    fragmento.appendChild(clone);
    canvas.appendChild(fragmento)
}