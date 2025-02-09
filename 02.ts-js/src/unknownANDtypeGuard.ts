// Type Assertion to Convert unknown to a Specific Type

function processAsString(input: unknown) {
    const str = input as string;

    if (typeof str === 'string') {
        console.log(str.toUpperCase());
    }
}

// More refined way
function processData(input: unknown) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    } else if (typeof input === 'number') {
        console.log(input.toFixed(3));
    } else if (Array.isArray(input)) {
        console.log(input.length);
    } else {
        console.log('unknown type');
    }
}


type User3 = {
    id: number;
    name: string;
}


function isUser(input: unknown): input is User3 {
    return (
        typeof input === 'object' &&
        input !== null &&
        'id' in input &&
        typeof (input as any).id === 'number' &&
        'name' in input &&
        typeof (input as any).name === 'string'
    )
}

function processUser(input: unknown) {
    if (isUser(input)) {
        console.log(`wassap! ${input.name}. your id number is ${input.id}`);
    }
    console.log('invalid input.');
}