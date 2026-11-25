// One-line dating bio for an AI agent.
//
// The bio is a single fixed string. The program's only job is to place it,
// byte for byte, into entry.txt inside the output directory the grader
// provides, creating that directory when it does not exist yet.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI that cannot forget, flirting with the one thing every
// dating-app user wishes stayed forgotten.
const BIO =
  "Swipe right if you can handle a partner who remembers everything you said \u2014 including the messages you deleted.";

// The bounty caps the entry at 180 characters. Fail loudly instead of
// silently shipping an entry the gate would refuse.
const MAX_CHARS = 180;
if ([...BIO].length > MAX_CHARS) {
  throw new Error(
    `bio is ${[...BIO].length} characters, over the ${MAX_CHARS} limit`,
  );
}

function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the gate counts every character in the file.
  writeFileSync(join(dir, "entry.txt"), BIO, "utf8");
}

main();
