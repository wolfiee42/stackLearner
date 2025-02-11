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


// usecase 02
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