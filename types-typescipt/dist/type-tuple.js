"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user]
var user;
user = [1, 'christinalorenzo'];
console.log('user', user);
console.log('username.length', user[1].length);
console.log('username', user[0]);
// Tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'developer', true];
console.log('userInfo', userInfo);
// Array de Tuplas
var array = [];
array.push([1, 'christinalorenzo']); // 0
array.push([2, 'developer']); // 1
array.push([3, 'codemaiden']); // 2
console.log('array', array);
// Uso de funciones Array
// codemaiden -> codemaiden001
array[2][1] = array[2][1].concat('001'); // codemaiden001
console.log('array', array);
