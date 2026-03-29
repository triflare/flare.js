/**
 * Say Hello block implementation
 */
export function sayHelloImpl(args) {
  return `Hello, ${args.NAME}!`;
}
/**
 * Example Module - Add your extension features here
 *
 * To add blocks to your extension:
 * 1. Add block definitions to the main extension's getInfo() method (01-core.js)
 * 2. Add the block implementation methods here in separate files
 * 3. Add them to the class in 01-core.js
 *
 * This is a reference module showing how to organize blocks across files.
 */

// Example block implementations
// These can be imported into 01-core.js

/**
 * Example: Advanced block with color manipulation
 */
export function colorBlock(args) {
  const color = args.COLOR || '#FF0000';
  return `Selected color: ${color}`;
}

/**
 * Example: Block that performs calculations
 */
export function calculateDistance(args) {
  const x1 = Number(args.X1) || 0;
  const y1 = Number(args.Y1) || 0;
  const x2 = Number(args.X2) || 0;
  const y2 = Number(args.Y2) || 0;

  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
