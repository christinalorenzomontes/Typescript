"use strict";
// Type: object
var user;
user = {}; // Object
user = {
    id: 1,
    username: 'christinalorenzo',
    firstName: 'Christina',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs tipo TS)
var myObj = {
    id: 1,
    username: 'christinalorenzo',
    firstName: 'Christina',
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
