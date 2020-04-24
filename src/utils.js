// Utility Functions
console.log("utils.js is running");

const square = (x) => x * x;

/* export */ const add = (a, b) => a + b; // 1. direct named export

const subtract = (a, b) => a - b;
export default subtract; // 2. direct default export - can't be done before a var declaration

// 🔔  Every file can have : a single default exports -&- as many named exports as u like
// (not an object definition!)
export { square, add /* subtract as default */ };
