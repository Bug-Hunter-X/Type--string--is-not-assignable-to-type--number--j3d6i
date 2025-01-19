function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, 2); // Works fine
let result2 = addSafe("hello", 2); // Prints error message and returns 0
let result3 = addSafe(1, "world"); // Prints error message and returns 0