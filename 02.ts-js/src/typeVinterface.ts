// Type
type User1 = {
    id: number;
    name: string;
    email: string;
}

// Interaface
interface IUser2 {
    id: number;
    name: string;
    email: string;
}

// interface extend
interface IAdmin2 extends IUser2 {
    role: string;
}

const admin2: IAdmin2 = {
    id: 2,
    name: 'saif',
    email: 'saif@xyz.com',
    role: 'admin'
}

// type extend
type TAdmin1 = User1 & {
    role: string;
}

const admin1: TAdmin1 = {
    id: 1,
    name: "Ashik",
    email: 'ashik@esa.com',
    role: "super-admin"
}

//! mutable and immutable 
//! interface is mutable
//! type is immutable

interface IAnimal {
    name: string;
    type: string;
}
interface IAnimal {
    birthDay: string; // Augmented later
}

const cat: IAnimal = {
    name: 'john',
    type: 'husky',
    birthDay: '23-4-21'
}


// function signiture
// type
type AddFunction = (a: number, b: number) => number;

const addition3: AddFunction = (a, b) => a + b;

// interface 

interface DivideFunction {
    (a: number, b: number): number
}

const divide: DivideFunction = (a, b) => a / b;

