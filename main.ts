// One-Line Office Joke: 24-Hour Sprint
// Entry for make.fun bounty u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.
// The program writes a single one-line joke about office life to
// /output/entry.txt. The text is fixed in the program: no randomness, no
// network, no date or time, so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The joke: one sentence, setup then punchline. A dead office plant is
// replaced by facilities with a plastic one — and the office's love of
// process does not stop there: the fake plant still gets a laminated
// watering schedule taped to its pot.
const JOKE =
  "The office ficus died, so facilities replaced it with a plastic one and taped a laminated watering schedule to its pot.";

// The gate allows 1 to 200 characters of UTF-8 text. Keep the line tight
// and well inside the cap so the entry is valid and small; on an exact
// win-rate tie the smaller text places first, so brevity is worth keeping.
const MAX_CHARS = 200;

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if ([...JOKE].length > MAX_CHARS) {
  throw new Error(`Joke is ${[...JOKE].length} characters, over the 200 cap`);
}

mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file holds exactly the joke and nothing else.
writeFileSync(outPath, JOKE, "utf8");
