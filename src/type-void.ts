// Void

// Tipo explícito
function  showInfo(user: any) {
    console.log('User info', user.id, user.username, user.firstName);
    //return 'hola';
}

showInfo({id: 1, username: 'christinalorenzo', firstName: 'Christina'});

// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'christinalorenzo', firstName: 'Christina'});

// Tipo void, como tipo de dato en varaible
let unusuable: void;
unusuable = null;
unusuable = undefined;

// Tipo: Never

function handleError(code: number, message: string): never{

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina

handleError(404, 'Not Found');