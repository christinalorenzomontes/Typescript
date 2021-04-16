"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
var username;
username = 'christinalorenzo';
username = 'christina';
// tenemos una cadena, TS confía en mí!
var message = username.length > 10 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var usernameWithId = 'christinalorenzo 1';
// Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 10 ?
    "Welcome " + username :
    'Username is too short';
var helloUser;
helloUser = 'hello developer';
username = helloUser.substring(6);
console.log('username', username);
