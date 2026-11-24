// The One-Line Exit — main.ts v2 (revision: letter-form opening, per the
// judge's "reads as a letter someone could actually send" criterion)
// Writes exactly one line (a funny one-line resignation letter) to
// ENTRY_OUTPUT if set, otherwise /output/entry.txt. No trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Please accept my resignation: the zoo's penguins have unionized, and frankly, their demands are reasonable.";

// Gate: 1-140 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (/\n|\r/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading/trailing whitespace");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
