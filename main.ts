// judge-smile — Make the Judge Smile (make.fun)
// One line, at most 200 characters, about a small good thing that
// happened today. Deterministic: no network, no clock, no randomness.
// The entry is a fixed string, written verbatim to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry (149 characters, verified by the length check below).
// Why this line: a small kindness (the driver waiting), a concrete
// detail (the wink in the mirror), and a surprise turn — a grey
// morning reframed as "a small parade". Warmth first, then the twist,
// in fresh wording with no greeting-card phrasing.
const ENTRY =
  "The bus driver waited while an old man crossed slowly, then winked at me in the mirror — and somehow the whole grey morning felt like a small parade.";

// Count characters (code points), not bytes: the gate counts 1–200 chars.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to a local out/ dir.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${length} characters)`);
