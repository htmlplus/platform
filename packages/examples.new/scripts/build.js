import compiler, {
  extract,
  parse,
  read,
} from "@htmlplus/element/compiler/index.js";
import { prepare, react } from "./plugins/index.js";

const { start, next, finish } = compiler(
  read(),
  prepare(),
  parse(),
  extract({
    prefix: "plus",
  }),
  react()
);

(async () => {
  await start();

  const another = await next("./src/aspect-ratio/default/readme.md");
  console.log(1, another);

  await finish();
})();