/**
 * Typed parameters
 * Typed return values 
 * Optional parameters
 * Default parameters
 * Rest parameters
*/

function add(a: number, b: number): string {
    return (a + b).toFixed(2);
}

console.log(add(4.243, 5.3432));

function addition(x: number, y: number = 4) {
    return x + y;
}

console.log(addition(4));