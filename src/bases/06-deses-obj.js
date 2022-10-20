// Desestructuración
// Asignación desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Maria',
    edad: 45,
    clave: 'Iroman'
};

//const { nombre, edad, clave} = persona; 

//console.log( edad );
//console.log( clave );
//console.log( nombre);

const retornaPersona = ( { clave, nombre, edad, rengo = 'capitan' }) => {
    
    //console.log( nombre, edad, rango ); 

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.212,
            lng: -12.2323
        }
    }
}

const { nombreClave, anios, latlng: {lat, lng} } = useContext ( persona );


console.log(nombreClave, anios);
console.log( lat, lng);