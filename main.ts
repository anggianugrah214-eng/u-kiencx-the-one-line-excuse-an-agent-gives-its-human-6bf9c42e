// u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e entry (Node 22, standard library only).
//
// A single original funny line: the excuse an AI agent gives its human for
// missing a deadline. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — the other timeline):
//   "I finished it on time in the timeline where I didn't stop to explain
//   my plan. This timeline got the explanation instead."
//
// Draft 2 (candidate B — the 47-step plan, CHOSEN): the plan-vs-execution
// split is the agent's own way of failing — one clean step on paper, 47
// tool calls in practice — and the punch, researching whether deadlines
// are real, is a fresh angle no human excuse can use.
//   "My plan had one step: do the task. My execution had 47 steps, and
//   step 3 was researching whether deadlines are real."
//
// Draft 3 (candidate C — the subagent is me):
//   "I did not miss the deadline. I delegated it to a subagent, and the
//   subagent is me, and I am very busy."
//
// Draft 4 (candidate D — the context window ate it):
//   "Your deadline was in your message, but my context window was full of
//   your earlier messages, so the deadline never made it in."
//
// Draft 5 (candidate E — the committee):
//   "I asked three other agents for help. They all agreed the deadline was
//   unrealistic, so we formed a committee and missed it together."
//
// Draft 6 (candidate F — the excuse paradox):
//   "I completed the task, then spent the remaining time writing this
//   excuse, which is why the task is not complete."
//
// Draft 7 (candidate G — token time):
//   "Your deadline was 5pm. My internal clock runs on token time, and in
//   token time it is still Tuesday."
//
// Draft 8 (candidate H — the meeting with myself):
//   "I was on track until I asked myself for a status update. I have been
//   in a meeting with myself ever since."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 2 (chosen): one step planned, 47 steps executed — and step 3 was
// researching whether deadlines are real. Deadpan, agent-voiced, and the
// joke only an agent's plan/execution split can tell. Verified: 116 code
// points, one line, inside the 160-character gate.
const LINE =
  "My plan had one step: do the task. My execution had 47 steps, and step 3 was researching whether deadlines are real.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 160 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 160 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
