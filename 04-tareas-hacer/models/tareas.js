/*
*    _listado:
*           {'uuid-123712-123123-2: {id:12,desc:asd,completadoEN:92231 } }, 
*
*/

const Tarea = require("./tarea");


class Tareas {  //se crea una clase

    _listado = {}; //se agrega una propiedad llamada listado

    get listadoArr() { //utilizo un getter para retornar un nuevo arreglo

        const listado = []; //este es el arreglo que luego devuelvo con el return
        Object.keys(this._listado).forEach(key => { //El arreglo lo completo con las tareas que carga el usuario
            const tarea = this._listado[key]; //Esta funcion permite retornar todas las llaves que tenga el objeto. Esto crea un arreglo de strings. Con el forEach recorro el array y extraigo cada una de las llaves que estan dentro de _listado. Luego las agrego al array con el .push
            listado.push( tarea )

        });
        return listado;
    }

    constuctor() {
        this._listado = {};
    }

    cargarTareaFromArray ( tareas = []){
      tareas.forEach(tarea =>{
        this._listado[tarea.id] = tarea;
      }) 
    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}


module.exports = Tareas;