type APIResponse99 = {
    status: string;
    data: unknown;
}

function handleAPIResponse(response: APIResponse99) {
    if (typeof response.data === 'string') {
        console.log('Data is string: ', response.data.toUpperCase());
    } else if (typeof response.data === 'object' && response.data !== null) {
        console.log('Data is an object: ', response.data);
    } else {
        console.error('Unexpected type error.', typeof response.data);
    }
}

const response1: APIResponse99 = { status: 'success', data: 'message' };
const response2: APIResponse99 = { status: 'success', data: { id: 1 } };

handleAPIResponse(response1);
handleAPIResponse(response2);



//! Common Type Guard Syntax
//! typeof checks: For primitive types like string, number, etc.
//! instanceof checks: For class-based objects.
//! Custom Type Guards: Using a function that returns a boolean and asserts the type.


// usecase 01
type User89 = {
    id: number;
    name: string;
    email: string;
}

function isUser(data: unknown): data is User89 {
    return (
        typeof data === "object" &&
        data !== null &&
        "id" in data &&
        typeof (data as any).id === 'number' &&
        'name' in data &&
        typeof (data as any).name === 'string' &&
        'email' in data &&
        typeof (data as any).email === 'string'
    )
}

async function fetchUser(url: string) {
    const response = await fetch(url);
    const data: unknown = await response.json();

    if (isUser(data)) {
        return data;
    } else {
        console.error(`Invalid User Format`, data);
        return null;
    }

}


// usecase 02 // Handling Event Types
function isMouseEvent(event: Event) {
    return 'clientX' in event && 'clientY' in event;
}

document.addEventListener('click', (event) => {
    if (isMouseEvent(event)) {
        console.log(`Mouse clicked at: (${event.clientX}, ${event.clientY})`);
    } else {
        console.log('Non-mouse event triggered.');
    }
})

// usecase 03 // Union Types in Functions
type Cat = {
    meow: () => void;
}
type Dog = { bark: () => void };

type Animal = Cat | Dog;

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow();
    } else {
        animal.bark();
    }
}


// usecase 04 // Parsing and Validating Complex Data
type Order = {
    id: number;
    total: number;
    items: [];
}

function isOrder(order: unknown): order is Order {
    return (
        typeof order === 'object' &&
        order !== null &&
        'id' in order !== null &&
        typeof (order as any).id === 'number' &&
        'total' in order !== null &&
        typeof (order as any).total === 'number' &&
        Array.isArray((order as any).items)
    )
}

function processOrder32(json: string) {
    const data: unknown = JSON.parse(json);

    if (isOrder(data)) {
        console.log(`id number is ${data.id} and total is ${data.total}`);
    } else {
        console.log('Invalid Order data');

    }
}

const validOrderJSON = '{"id": "123", "total": 50.5, "items": ["item1", "item2"]}';
processOrder32(validOrderJSON);

// usecase 05 // Custom Error Handling
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

try {
    throw new Error('Something went wrong!')
} catch (error: unknown) {
    if (isError(error)) {
        console.log(error.message);
    } else {
        console.log(`Unknown error occured`);
    }
}


// never type
function throwError(message: string): never {
    throw new Error(message);
}


function infinityLoop(): never {
    while (true) {
        console.log('Infinity Loop.');
    }
}


// usecase 001

type Shape =
    | { kind: 'circle', radius: number }
    | { kind: 'square', length: number }
    | { kind: 'triangle', base: number, length: number }

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return shape.radius * 3.1416 * 0.5;
            break;
        case 'square':
            return shape.length * shape.length;
            break
        case 'triangle':
            return shape.base * shape.length * 0.5;
            break;

        default:
            const _exhaustedShape: never = shape;
            throw new Error(`Unexpected Shape, ${_exhaustedShape}`);
            break;
    }
}


// usecase 02

const API_ROUTES = {
    USERS: '/api/users',
    PRODUCTS: "/api/products",
    ORDERS: "/api/orders"
} as const;


function fetchForApi(route: keyof typeof API_ROUTES): string {
    return API_ROUTES[route];
}

fetchForApi('USERS'); // valid
// fetchForApi('INVALID'); // invalid;



// usecase 03
const COLORS = ['red', 'green', 'blue'] as const;

type BG_COLORS = typeof COLORS[number];

function setBackground(color: BG_COLORS): void {
    console.log(`background colors is ${color}`);
}

// satisfies

type CONFIG = {
    host: string;
    port: number;
    useSSL?: boolean;
}

const config = {
    host: 'localhost',
    port: 4000,
    useSSL: false,
    debug: true
} satisfies CONFIG


console.log(config.debug);


// usecase 01

type ACTION =
    | { type: 'ADD', payload: number }
    | { type: 'DELETE', id: number }

const action = {
    type: 'ADD',
    payload: 5
} satisfies ACTION;

function handleAction(action: ACTION): void {
    if (action.type === 'ADD') {
        console.log(`Actoin type: ${action.type} & payload is ${action.payload}`);
    } else {
        console.log(`Action type: ${action.type} & id number is ${action.id}`);
    }
}

handleAction(action);