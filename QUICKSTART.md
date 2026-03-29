# Quick start guide

Get up and running with Flare.js in 5 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- TurboWarp ([TurboWarp website](https://turbowarp.org)) or Scratch 3.0+

## Setup (one-time)

```bash
# 1. Clone your repository
git clone https://github.com/triflare/flare.js.git
cd flare.js

# 2. Install dependencies
npm install

# 3. Build the extension
npm run build
```

## Creating your first block

### 1. Prerequisites

Make sure you have completed the setup steps above.

### 2. Scaffold a new block

Blocks are defined in `src/01-flarejs.js` (for block definitions and wiring) and implemented as methods in the same class file.

**Example: Add a "Say Hello" block**

**a. Add the block definition to `getInfo()` in `src/01-flarejs.js`:**

Add an entry to the `blocks` array mapping the opcode to a method name (e.g., `sayHello`).

**b. Implement the block as a method in `src/01-flarejs.js`:**

```js
sayHello(args) {
  return `Hello, ${args.NAME || 'world'}!`;
}
```

**c. Wire up the opcode mapping in `getInfo()` in `src/01-flarejs.js`:**

Ensure the `opcode` in your block definition matches the method name `sayHello` so the runtime calls that method when the block is used.

**d. Rebuild the extension:**

```bash
npm run build
```

**e. Load the extension in TurboWarp or Scratch.**

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
| `npm run fullstack`  | Run format, lint, spellcheck, and build  |

All commands are run from the project root directory.

## Need help?

- Full docs: [README.md](README.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
- Issues: [Create an issue](../../issues/new)
- Scratch Extension Protocol: [Scratch Wiki](https://en.scratch-wiki.info/wiki/Scratch_Extension_Protocol)

---

Happy extending!
