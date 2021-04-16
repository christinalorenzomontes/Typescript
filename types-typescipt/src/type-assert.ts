export {};
// <tipo> // Angle Bracket syntax
let username: any;
username = 'christinalorenzo';
username = 'christina';

// tenemos una cadena, TS confía en mí!
let message: string = (<string>username).length > 10 ?
                        `Welcome ${username}` :
                        'Username is too short';
console.log('message', message);

let usernameWithId: any = 'christinalorenzo 1';
// Como obtener el username?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);


// Sintaxis "as"
message = (username as string).length > 10 ?
            `Welcome ${username}` :
            'Username is too short';

let helloUser: any;
helloUser = 'hello developer';
username = (helloUser as string).substring(6);
console.log('username', username);