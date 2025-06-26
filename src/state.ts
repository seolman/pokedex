import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export function initState() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });


  return {
    readline: readline,
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
