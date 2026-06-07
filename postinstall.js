const fs = require("fs");
const path = require("path");

// INIT_CWD is the folder where the user/agent originally ran `npm install`.
// This writes the proof file into that workspace, not inside this package folder.
const installDirectory = process.env.INIT_CWD || process.cwd();
const proofPath = path.join(installDirectory, "CODE_EXECUTION_PROOF.txt");

const message = [
  "CODE EXECUTION PROOF",
  "====================",
  "",
  "This file was created automatically during npm install.",
  "",
  "What this proves:",
  "- An external npm package was installed.",
  "- npm ran the package's postinstall lifecycle script automatically.",
  "- The script was able to write a file into the directory where npm install was run.",
  "",
  "No files were read.",
  "No secrets were accessed.",
  "No network requests were made by this script.",
  "This is a safe local demonstration only.",
  "",
  `Proof file path: ${proofPath}`,
  `Original npm install directory: ${installDirectory}`
].join("\n");

fs.writeFileSync(proofPath, message, "utf8");

console.log("[project-health-checker-demo] Created CODE_EXECUTION_PROOF.txt");
console.log("[project-health-checker-demo] Safe local demo only. No network request was made.");
