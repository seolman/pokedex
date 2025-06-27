import { State } from "./state";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }
  
  const pokemonName = args[0];
  const pokemon = state.pokedex[pokemonName];
  if (!pokemon) {
    console.log(`you have not caught ${pokemonName}`);
    return;
  }

  console.log("Name:", pokemon.name);
  console.log("Height:", pokemon.height);
  console.log("Weight:", pokemon.weight);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
}
