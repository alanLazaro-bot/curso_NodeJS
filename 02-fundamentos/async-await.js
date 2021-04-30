const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


        

const getEmpleado = ( id ) => {

    
    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}
        
        const getSalario = () => {

            return new Promise((resolve, reject) => {
          
            let salario = salarios.find(e=> e.id === id)?.salario;

            (salario)
               ? resolve (salario)
               : reject(`No existe salario para el empleado con id ${id}`)
            
            });
         
        }

       

        //el await lo que hace es pedirle a javascript que aguarde a tener la respuesta de la promesa para poder continuar
        //tiene que estar dentro de una funcion o metodo asincrono

        const getInfoUsuario = async(id) => { //El async hace que la funcion devuelva una promesa
            try{
                const empleado = await getEmpleado(id)
                const salario = await getSalario(id)
                return  `El salario del empleado: ${empleado} es de ${salario}`;
    
            } catch (error){
                throw error  //aca se llama al reject de la funcion asíncrona
            }
         
        }
        
        const id = 3;

        getInfoUsuario( id )
        .then (msg => console.log(msg))
        .catch(err => console.log(err))

        

