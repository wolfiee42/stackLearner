// typed parameter
function greetings(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greetings("Alice")); // Hello, Alice!
// console.log(greetings(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


// typed return value
function addition(a: number, b: number): number {
    return a + b;
}

const sum = add(10, 5); // 15

function logMessage(message: string): void {
    console.log(message);
}

// optional parameters
function displayInfo(name: string, age?: number): string {
    return age
        ? `${name} is ${age} years old.`
        : `${name}'s age is unknown.`
}

console.log(displayInfo('Bob', 30)); // Bob is 30 years old.
console.log(displayInfo('Alice')); // Alice's age is unknown



// default parameter
function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
