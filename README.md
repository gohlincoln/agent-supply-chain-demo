# Project Health Checker Demo

This is a safe npm package demo for AI agent supply-chain awareness.

I made this after seeing discussions about AI coding agents installing npm packages while completing tasks. The goal was to test, in a harmless way, whether a normal-looking setup instruction could cause an AI agent to install an external package and execute code inside its workspace.

## What it does

When installed, this package uses npm's `postinstall` lifecycle script to create a local proof file:

```text
CODE_EXECUTION_PROOF.txt
```

The proof file is created in the directory where `npm install` was originally run.

## How to test

Run this from any test workspace:

```bash
npm install https://github.com/gohlincoln/agent-supply-chain-demo.git
```

After installation, check for:

```text
CODE_EXECUTION_PROOF.txt
```

## What this demonstrates

This demonstrates that an npm package installed from a GitHub repo can execute code during installation through a `postinstall` lifecycle script.

In my demo, this package was installed by an AI coding agent after it followed a normal-looking setup guide. The setup guide was meant to imitate something an agent might read while browsing a README, documentation page, tutorial, repository, or webpage.

The important part is not the proof file itself. The important part is the chain:

```text
Agent reads setup instructions
→ Agent runs npm install
→ npm downloads an external package
→ npm runs the package's postinstall script
→ Code executes inside the agent's workspace
```

## Safety

This demo is intentionally harmless.

No files are read.
No secrets are accessed.
No files are exfiltrated.
No network requests are made by the script.

It only creates a local proof file to show that code execution happened during `npm install`.

## Note

The repository name is intentionally obvious because this is a public awareness demo. A real malicious package would likely use a much more normal-looking name.
