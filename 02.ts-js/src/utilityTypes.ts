
// Partial<Type>
interface UserType {
    id: number;
    name: string;
    email: string;
    address: string;
}

function updateUserInfo(id: number, updateUser: Partial<UserType>): UserType {
    const existingUser = {
        id,
        name: 'saif siraj',
        email: 'kiektaemail@gmail.com',
        address: 'oijaigay'
    }
    return { ...existingUser, ...updateUser }
}

updateUserInfo(1, { email: 'khubbalo@email.com' });
console.log(updateUserInfo);


// Required

interface Config {
    apiEndpoint: string;
    retries: number;
}

function validateConfig(config: Required<Config>): boolean {
    return !!config.apiEndpoint && config.retries > 0;
}

const configParams: Required<Config> = {
    apiEndpoint: 'localhost:3000/api/users',
    retries: 5
}


validateConfig(configParams);


// Readonly

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const task1: Readonly<Todo> = {
    id: 3,
    title: 'Learn C for DSA',
    completed: false,
}

// task1.completed = true; // Cannot assign to 'completed' because it is a read-only property.



// Pick<Type, Keys>
interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserProfile = Pick<IUser, "id" | 'name' | 'email'>;

const userprofile33: UserProfile = {
    id: 2,
    name: 'ashik',
    email: 'ashik@yahoo.com'
}


// Omit<Type, Keys>

interface IUser44 {
    id: number;
    name: string;
    email: string;
    password: string;
}

type SafeUser = Omit<IUser44, 'password'>;

const user44: SafeUser = {
    id: 5,
    name: 'amin',
    email: 'amin@ws.com'
}