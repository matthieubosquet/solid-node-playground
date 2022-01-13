# TypeScript

Scaffolding TypeScript projects

## Install

### Basic dev env

```bash
npm i --save-dev @solid/eslint-config-base @tsconfig/node14 @types/jest @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier jest prettier ts-jest typescript
```

### Additional RDF dependencies

```bash
npm i --save-dev @rdfjs/types @types/n3 n3
```

## GitHub CI

Actions to audit and test on push to main and publish on release creation.

## VSCode

The [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) is quite handy to continuously run and debug tests. It needs configuration in [VSCode user settings](https://code.visualstudio.com/docs/getstarted/settings): search and set "Jest Command Line": `npm run test:unit --`. In order for the debugging to work properly, add a global launch config one in your user's `settings.json` (probably better), just add a launch field there:

```json
    "launch": {
      "configurations": [
        {
          "type": "node",
          "name": "vscode-jest-tests",
          "request": "launch",
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen",
          "disableOptimisticBPs": true,
          "cwd": "${workspaceFolder}",
          "runtimeExecutable": "npm",
          "args": [
            "test",
            "--",
            "--runInBand",
            "--watchAll=false"
          ]
        }
      ]
    },
```
