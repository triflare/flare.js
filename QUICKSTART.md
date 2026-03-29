# Quick start guide

Get up and running with your TurboWarp extension in 5 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- TurboWarp ([Link](https://turbowarp.org/)) or Scratch 3.0+

## Setup (one-time)

```bash
# 1. Clone your repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# 2. Install dependencies
npm install

# 3. Build the extension
npm run build
```

## Creating your first block

### 1. Prerequisites

Make sure you have completed the setup steps above.

### 2. Scaffold a new block

Blocks are defined in `src/01-core.js` (for block definitions) and implemented in `src/02-example-module.js` (for logic).

**Example: Add a "Say Hello" block**

**a. Add the block definition to `getInfo()` in `src/01-core.js`:**

**b. Implement the block in `src/02-example-module.js`:**

```js
export function sayHello(args) {
  return `Hello, ${args.NAME || 'world'}!`;
}
```

**c. Wire up the block in `src/01-core.js`:**

```js
import { sayHello } from './02-example-module.js';
// ...existing code...
sayHello(args) { return sayHello(args); }
```

**d. Rebuild the extension:**

```bash
npm run build
```

**e. Load the extension in TurboWarp or Scratch.**

## Common commands

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run build`      | Build the extension for use in TurboWarp |
| `npm run watch`      | Rebuild automatically on file changes    |
| `npm run lint`       | Run ESLint to check code style           |
| `npm run format`     | Format code using Prettier               |
| `npm run spellcheck` | Run spell checker on the codebase        |
| `npm run fullstack`  | Run format, lint, spellcheck, and build  |

All commands are run from the project root directory.

## Need help?

- Full docs: [README.md](README.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
- Issues: [Create an issue](../../issues/new)
- Scratch Extension Protocol: [Scratch Wiki](https://en.scratch-wiki.info/wiki/Scratch_Extension_Protocol)

---

Happy extending!
