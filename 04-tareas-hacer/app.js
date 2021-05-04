require('colors'); // aqui se importa el paquete colors

const { guardarDB, leerDB } = require('./db/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput
} = require ('./helpers/inquirer'); //aca estoy importando estos objetos o gfunciones que se encuentran en otro archivo

const Tareas = require('./models/tareas');



const main = async()=>{  //Es la funcion main que se ejecuta luego como programa principal.
   
    let opt = ''; //creamos la variable opt la cual va a ser lo que el usuario elija como opcion en el menú
    const tareas = new Tareas(); //Se crea la instancia de las tareas para que el usuario elija la que desea

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareaFromArray(tareasDB)
    }


    do {

        opt= await inquirerMenu();
       switch (opt) {
           case '1':
               //crear opcion
               const desc = await leerInput('Descripción:');
               tareas.crearTarea(desc);

               break;

            
           case '2':
               console.log(tareas.listadoArr)
               
            break;
       
       }

       guardarDB(tareas.listadoArr);

        await pausa();

        
         

        
    } while ( opt !== '0');

   

  


}



main();