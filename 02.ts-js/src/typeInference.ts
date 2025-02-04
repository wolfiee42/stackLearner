// type inference

// premitive type
let manager = 'saif'; // TypeScript infers 'string'
let product = 30; // TypeScript infers 'number'
let inPermissible = false; // TypeScript infers 'boolean'

// manager = true // Error: Type 'boolean' is not assignable to type 'string'.


// function
function add(a: number, b: number) {
    return (a + b); // Return type inferred as 'number'
}

const result = add(5, 10);
// console.log(result.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.



// array
const IDNumbers = [23, 432, 123, 34];

IDNumbers.push(4);
// IDNumbers.push('five'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


// object
const obj = {
    name: 'saif',
    age: 23,
    weight: 77
}

obj.age = 22; //Allowed.
// obj.isActive = true; // Error: Property 'isActive' does not exist on type '{ name: string; age: number; weight: number; }


const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2); // 'num' is inferred as 'number'
// const invalid = numbers.map((num) => num.toUpperCase()); //Error: Property 'toUpperCase' does not exist on type 'number'.


// without inference
function validateForm(formData: { email: string, age: number, isAdmin: boolean }): boolean {
    const email: string = formData.email;
    const age: number = formData.age;
    const isAdmin: boolean = formData.isAdmin;

    if (email.includes('@') && age > 18) {
        return true
    }

    return false;
}

// with inference
function validateFormWithInference(formData: { email: string, age: number, isAdmin: boolean }): boolean {
    const { email, age, isAdmin } = formData;
    return email.includes('@') && age > 18;
}