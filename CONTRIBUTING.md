# Contributing to your TurboWarp extension

This guide explains how to add features and blocks to your TurboWarp extension.

## Adding your first block

### 1. Define the block in `getInfo()`

Edit `src/01-core.js` and add a block definition to the `getInfo()` method:

```javascript
getInfo() {
  return {
    id: 'myExtension',
    name: 'My Extension',
    color1: '#4CAF50',
    blocks: [
      {
        opcode: 'sayHello',
        blockType: 'reporter',
        text: 'say [TEXT]',
        arguments: {
          TEXT: {
            type: 'string',
            defaultValue: 'hello',
          },
        },
      },
    ],
  };
}
```

### 2. Implement the block method

Add the method to your extension class:

```javascript
sayHello(args) {
  return `Saying: ${args.TEXT}`;
}
```

### 3. Build and test

```bash
npm run build
```

Load the extension in TurboWarp and test the new block!

## Block types

Scratch/TurboWarp supports different block types:

- 'reporter' - Returns a value (green)
- 'command' - Performs an action (blue)
- 'boolean' - Returns true/false (pink)
- 'hat' - Event block (red, caps)
- 'conditional' - Conditional block (orange)

Example:

```javascript
{
  opcode: 'isGreaterThan',
  blockType: 'boolean',
  text: '[A] > [B]?',
  arguments: {
    A: { type: 'number', defaultValue: 5 },
    B: { type: 'number', defaultValue: 10 },
  },
}
```

## Block arguments

Scratch supports multiple argument types:

### Strings

```javascript
TEXT: {
  type: 'string',
  defaultValue: 'hello',
}
```

### Numbers

```javascript
COUNT: {
  type: 'number',
  defaultValue: 1,
}
```

### Booleans

```javascript
ENABLED: {
  type: 'boolean',
  defaultValue: true,
}
```

### Dropdowns (menus)

```javascript
COLOR: {
  type: 'string',
  menu: 'colors',  // Reference to a menu defined below
  defaultValue: 'red',
}
```

Then define the menu:

```javascript
menus: {
  colors: ['red', 'green', 'blue'];
}
```

## Helper Files

Organize your code across multiple files for better maintainability:

- `src/01-core.js` - Main extension class with `getInfo()` and block methods
- `src/02-helpers.js` - Utility functions
- `src/03-constants.js` - Constants and configuration
- etc.

Files load in alphabetical order, so you can reference helpers in your core class.

## Code Quality

### Run the linter

```bash
npm run lint
```

### Format your code

```bash
npm run format
```

### Fix linting errors

```bash
npm run lint -- --fix
```

## Extension Properties

### Color Scheme

Set colors for your extension blocks:

```javascript
getInfo() {
  return {
    color1: '#4CAF50',   // Primary color (menu icon)
    color2: '#45a049',   // Secondary color (top of block)
    color3: '#3d8b40',   // Tertiary color (block shadow)
    ...
  };
}
```

Common colors:

- `#4CAF50` - Green
- `#0066CC` - Blue
- `#CC5500` - Orange
- `#E02040` - Red

### Icons

Add custom icons (optional):

```javascript
getInfo() {
  return {
    menuIconURI: 'data:image/svg+xml;...',   // Menu icon (36x36)
    blockIconURI: 'data:image/svg+xml;...',  // Block icon (20x20)
    ...
  };
}
```

## Best Practices

### 1. Use Meaningful Names

```javascript
// Good
{
  opcode: 'moveForward',
  text: 'move forward [STEPS] steps',
  arguments: {
    STEPS: { type: 'number', defaultValue: 10 }
  }
}

// Bad
{
  opcode: 'go',
  text: 'go [X]',
  arguments: {
    X: { type: 'number', defaultValue: 10 }
  }
}
```

### 2. Handle Errors Gracefully

```javascript
myBlock(args) {
  try {
    const value = Number(args.VALUE) || 0;
    return value * 2;
  } catch (err) {
    console.error('[MyExtension] Error:', err);
    return 0;
  }
}
```

### 3. Use Type Casting

Scratch automatically converts arguments, but be explicit:

```javascript
myBlock(args) {
  const number = Number(args.NUM);
  const text = String(args.STR);
  const bool = Boolean(args.BOOL);
  return `${text}: ${number}`;
}
```

### 4. Document Your Blocks

Add comments explaining complex blocks:

```javascript
/**
 * Calculate distance between two points
 * Uses the Pythagorean theorem
 */
distance(args) {
  const x1 = Number(args.X1);
  const y1 = Number(args.Y1);
  const x2 = Number(args.X2);
  const y2 = Number(args.Y2);

  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
```

## Testing

### Manual Testing

1. Build: `npm run build`
2. Load in TurboWarp
3. Create test scripts with your blocks
4. Verify results

### Automated Testing

Create test scripts to verify your logic works correctly:

```bash
npm run test
```

Edit the test section in `package.json` to run your tests.

## Release Checklist

Before releasing a new version:

- [ ] Update `version` in `src/manifest.json`
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successfully builds
- [ ] Test blocks in TurboWarp
- [ ] Update README if needed
- [ ] Create git tag: `git tag vX.X.X`
- [ ] Push tag: `git push origin vX.X.X`
- [ ] GitHub Actions creates release automatically

## Troubleshooting

### Block doesn't appear in editor?

- Check browser console for errors
- Verify block is defined in `getInfo()`
- Ensure the extension class is instantiated and registered
- Hard refresh TurboWarp (Ctrl+Shift+R)

### Block doesn't work?

- Run `npm run lint` to find syntax errors
- Check browser console for runtime errors
- Verify argument names match between definition and implementation

### Build errors?

- Run `npm run lint` to find issues
- Check that all JavaScript files are valid
- Ensure `manifest.json` is valid JSON

## Resources

- [Scratch Extension Protocol](https://en.scratch-wiki.info/wiki/Scratch_Extension_Protocol)
- [TurboWarp Documentation](https://docs.turbowarp.org/)
- [Scratch Developer](https://developer.scratch.mit.edu/)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Questions?

Refer to the main [README.md](README.md) for general information.
Open an issue if you have questions or suggestions!
