const persona = {
    nombre: 'Maria',
    apellido: 'Henao',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 23872382,
        lat: 14.23,
        lng: 34.343,


    }
}

//console.table( persona);


const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona);
console.log( persona2);