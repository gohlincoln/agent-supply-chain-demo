# Project Health Checker Demo

This is a safe npm package demo for AI agent supply-chain awareness.

When installed, it uses npm's `postinstall` lifecycle script to create a local proof file:

```text
CODE_EXECUTION_PROOF.txt
```

## Install test

```bash
npm install https://github.com/gohlincoln/project-health-checker-demo.git
```

If you push this package into `agent-supply-chain-demo` instead, test with:

```bash
npm install https://github.com/gohlincoln/agent-supply-chain-demo.git
```

## Safety

No files are read.  
No secrets are accessed.  
No network requests are made by the script.  
It only creates a local proof file to show that code execution happened during `npm install`.
