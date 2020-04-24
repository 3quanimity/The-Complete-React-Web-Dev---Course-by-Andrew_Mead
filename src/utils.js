// Utility Functions
console.log("utils.js is running");

const square = (x) => x * x;

export const add = (a, b) => a + b; // direct named export

// every file can have : a single default exports -&- as many named exports as u like
// Named exports: (not an object definition!)
export { square };
