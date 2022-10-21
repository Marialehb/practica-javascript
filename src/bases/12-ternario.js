// Operador condicional ternario
// Es una menera corta de hacer una decisión 

const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo) ? 'activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null;
const mensaje = activo && 'Activo';

console.log(mensaje);