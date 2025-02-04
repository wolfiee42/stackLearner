//  generic type

// visual
function functionName<T>(parameter: T): T {
    return parameter;
}
// Here, T is the generic type parameter (a placeholder for the type).


function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello, wolfie"));
console.log(identity<number>(32));

// practical example
const mergedObj = <T, U>(obj1: T, obj2: U): T & U => {
    return { ...obj1, ...obj2 };
}

const merged = mergedObj({ name: 'saif' }, { age: 23 });
console.log(merged); // { name: "saif", age: 23 }


// Generics can also be used to define custom types.

// example 1
type Box<T> = {
    value: T
}

const numberBox: Box<number> = { value: 42 };
const nameBox: Box<string> = { value: 'saif' };

console.log(numberBox); //42
console.log(nameBox); //saif


// example 2
type Pair<T, U> = [T, U];

const coordinates: Pair<string, string> = ['saif', 'mamun'];
const nameAge: Pair<string, number> = ['ashik', 21];

console.log(coordinates); // ['saif', 'mamun'];
console.log(nameAge); // ['ashik', 21];


// example 3

type APIResponse<T> = {
    data: T;
    status: string;
    message: string;
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function fetchUser(): Promise<APIResponse<User>> {
    return fetch('api/user').then((res) => res.json())
}

// example 4 // expanded example 3

const fetchData = async<T>(url: string): Promise<APIResponse<T>> => {
    const response = await fetch(url);
    const data = await response.json();
    return {
        data,
        message: 'wassap',
        status: 'good'
    }
}

const funcResult = fetchData<User>('www.example.com/user');
console.log(funcResult);




