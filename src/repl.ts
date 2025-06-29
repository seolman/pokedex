import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().split(" ").filter((word) => word !== "");
}

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (input: string) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1);
    const command = state.commands[commandName];
    if (!command) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      state.readline.prompt();
      return;
    }

    try {
      await command.callback(state, ...args);
    } catch (err) {
      console.log(`${(err as Error).message}`);
    }

    state.readline.prompt();
  });
}

