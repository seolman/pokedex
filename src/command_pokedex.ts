import { State } from "./state";

export async function commandPokedex(state: State) {
  const entries = Object.values(state.pokedex);

  if (entries.length === 0) {
    console.log("Your Pokedex is empty!");
    return;
  }

  console.log("Your Pokedex:");
  for (const pokemon of entries) {
    console.log(`  - ${pokemon.name}`);
  }
}
