// Corchetes []
// Tipo Explícito
var users;
users = ['christinalorenzo', 'developer', 'codemaiden'];
//users = [1, true, 'test']; // Error
// Tipo Inferido
var otherUsers = ['christinalorenzo', 'developer', 'codemaiden'];
//otherUsers = [1, true, 'test']; // Error
// Array<TIPO>
var pictureTitles;
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
