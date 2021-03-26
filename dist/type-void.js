// Void
// Tipo explícito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
    //return 'hola';
}
showInfo({ id: 1, username: 'christinalorenzo', firstName: 'Christina' });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'christinalorenzo', firstName: 'Christina' });
// Tipo void, como tipo de dato en varaible
var unusuable;
unusuable = null;
unusuable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
handleError(404, 'Not Found');
