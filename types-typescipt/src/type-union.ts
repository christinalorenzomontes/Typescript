export {};

// 10, '10'
//let idUser: number | string;
//idUser = 10;
//idUser = '10'; 

// Buscar username dado un ID
//function getUsernameById(id: number | string) {
//    // Lógica de negocio, find the user
//    return 'christinalorenzomontes';
//}

//getUsernameById(20);
//getUsernameById('20');

// Alias de Tipos : TS
type  idUser = number | string;
type userName = string;
let idUser: idUser;
idUser = 10;
idUser = '10'; 

// Buscar username dado un ID
function getUsernameById(id: idUser): userName {
    // Lógica de negocio, find the user
    return 'christinalorenzomontes';
}

getUsernameById(20);
getUsernameById('20');

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';