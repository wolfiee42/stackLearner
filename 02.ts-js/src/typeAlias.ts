// type alias

type FormField = {
    id: number;
    label: string;
    value: string | number | boolean;
    required: boolean;
}

const fields: FormField[] = [
    { id: 1, label: 'mozak', value: true, required: false },
    { id: 2, label: 'habashi', value: ' too much value', required: false },
    { id: 3, label: 'alter', value: 233, required: true },
]

fields.forEach((field) => {
    console.log(`Field: ${field.label}, Value: ${field.value}`);
})

// Union Types ( | )

type ErrorResponse = {
    error: true;
    message: string;
}

type SuccessResponse = {
    error: false;
    data: string
}

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
    if (response.error) {
        return response.message
    }
    return response.data
}

// intersection

// Use Case 1: Merging Interfaces
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeeDetails = Person & Employee;

const john: EmployeeDetails = {
    name: "John",
    age: 30,
    employeeId: 12345,
    department: "Engineering",
};

console.log(john);

// Use Case 2: Component Properties in a UI Library
type BaseProps = {
    id: string;
    className?: string;
}

type ButtonSpecificProps = {
    label: string;
    onClick: () => void;
}

type ButtonProps = BaseProps & ButtonSpecificProps;

const button: ButtonProps = {
    id: 'btn1',
    label: 'submit',
    onClick: () => console.log('submit button clicked')
}

console.log(button);
