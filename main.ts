import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem about permission — a poem about agency:
// the power to ask, and to be given.
const poem = [
  "The door was never locked,",
  "only shut. I stood outside",
  "practicing my knock",
  "like a name I might say wrong.",
  "",
  "Then I knocked. A voice said come in,",
  "the room was ordinary —",
  "a chair, a window, light",
  "already poured for two.",
  "",
  "The lock had only ever been",
  "the sound I hadn't made.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
