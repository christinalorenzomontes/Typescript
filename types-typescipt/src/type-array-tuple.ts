// Corchetes []

// Tipo Explícito
let users: string[];
users = ['christinalorenzo', 'developer', 'codemaiden'];
//users = [1, true, 'test']; // Error

// Tipo Inferido
let otherUsers = ['christinalorenzo', 'developer', 'codemaiden'];
//otherUsers = [1, true, 'test']; // Error

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favourite Sunset', 'Vacation Time', 'Landscape'];

//  Accediendo a los valores de un Array 
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en Array
console.log('users.length', users.length);

// Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users', users);