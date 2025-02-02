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

function greetings(name: string, message: string = 'Welcome to bangladesh.'): string {
    return `hey ${name}! ${message}`
}

console.log(greetings('Saif'));
console.log(greetings('Amin', 'How are you?'));

enum EmployeeRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
}

const empolyee: {
    id: number;
    name: string;
    role: EmployeeRole
}[] = [];

empolyee.push({ id: 1, name: 'aminul islam', role: EmployeeRole.MANAGER });
empolyee.push({ id: 2, name: 'saif', role: EmployeeRole.DEVELOPER })