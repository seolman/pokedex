import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const pokemonName = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const roll = Math.random() * pokemon.base_experience
  if (roll > 40) {
    console.log(`${pokemonName} escaped!`);
    return;
  } 

  if (!state.pokedex[pokemonName]) {
    state.pokedex[pokemonName] = pokemon;
  }
  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
}
