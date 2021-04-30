/*
setTimeout(()=>{
    console.log('Hola Mundo');
}, 1000);
*/
//Son funciones que se ejecutan dentro de otra funcion.

//Las funciones callback son una forma dew asegurarnos de que un determinado codigo no se ejecute hasta que otro codigo lo haga antes

const getYsuarioByID = (id, callback) =>{
    const user = {
        id,
        nombre:'Fernando'
    }
    setTimeout(()=> {
        callback(user)
    }, 1500)
}

getUsuarioByID(10,(usuario) =>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase());
})

