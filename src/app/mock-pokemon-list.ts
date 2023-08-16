import { Pokemon } from "./pokemon";
export const POKEMONS: Pokemon[] = [ 
  // j'ai typé mes données en disant à typescript que ces informations contiennent des Pokemon dans un tableau.
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Plante", "Poison"],
    created: new Date()
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Feu"],
    created: new Date()
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Eau"],
    created: new Date()
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Insecte", "Poison"],
    created: new Date()
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Normal", "Vol"],
    created: new Date()
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Normal"],
    created: new Date()
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Normal", "Vol"],
    created: new Date()
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Poison"],
    created: new Date()
  },
  {
    id: 9,
    name: "Pikatchu",
    hp: 21,
    cp: 7,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Electrik"],
    created: new Date()
  },
  {
    id: 10,
    name: "Sabalette",
    hp: 19,
    cp: 3,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Normal"],
    created: new Date()
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Fée"],
    created: new Date()
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture: "https://assets.pokemon.com/assets/cm2/img/pokedex/",
    types: ["Feu"],
    created: new Date()
  }
]