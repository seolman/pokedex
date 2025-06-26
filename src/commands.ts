import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapBackward, commandMapForward } from "./command_map.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBackward,
    },
    explore: {
      name: "explore",
      description: "explore",
      callback: commandMapBackward,
    },
  };
}

