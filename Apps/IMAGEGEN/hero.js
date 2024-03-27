//https://superheroapi.com/api/access-token/character-id
const SUPERHERO_TOKEN = "1545360832902970";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const searchInput = document.getElementById("search");
const heroBtn = document.getElementById("heroButton");
const searchButton = document.getElementById("searchButton");

const imageHeroDiv = document.getElementById("heroImage");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statsToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "♨",
  combat: "🪒",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;

  const img = `<img src='${character.image.url}' height=200 width=200/>`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statsToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");
  imageHeroDiv.innerHTML = `${name}${img}${stats}`;
};

const getSearchedSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const superHero = json.results[0];
      // console.log(superHero);
      showHeroInfo(superHero);
    });
};

const randomNumber = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

searchButton.onclick = () => getSearchedSuperHero(searchInput.value);
heroBtn.onclick = () => getSuperHero(randomNumber());
window.onload = () => getSuperHero(randomNumber());