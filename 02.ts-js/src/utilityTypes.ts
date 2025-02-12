
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