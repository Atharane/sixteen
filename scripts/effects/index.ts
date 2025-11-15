import { Console, Effect } from "effect";

const main = async () => {
  const program = Console.log("yo!");
  Effect.runSync(program);
};

main();
