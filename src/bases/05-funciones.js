// Funciones en JS

//const saludar = function (nombre) {
//    return `Hola, ${ nombre}`;
//}


const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log( saludar(Maria) )

console.log( saludar2('Maria') );
console.log( saludar3('Julio') );
console.log( saludar4() );


const getUser = () => ({
    uid: 'ABC123',
    username: 'el_papiqwwqw'

});

const user = getUser
console.log( getUser);

// Tarea

 const getusuarioArtivo = ( nombre ) => ({
    
        uid: 'ABC123',
        udername: nombre
    
});

const usuarioActivo = getusuarioArtivo('Maria');
console.log( usuarioActivo);