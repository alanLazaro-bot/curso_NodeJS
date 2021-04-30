const argv = require('yargs')
.options({
    'b':{
    alias: 'base',
    demandOption: true,
    default: '/etc/passwd',
    describe: 'Es la base de la tabla de multiplicar',
    type: 'number'
    },
    'l':{
        alias:'listar',
        type:'boolean',
        default:false,
        demandOption:false,
        describe:'Muestra la tabla en consola'
    },
    'h':{
        alias:'hasta',
        type:'number',
        default:10,
        demandOption: true,
        describe:'Hasta donde llega la tabla multiplicando'
    }
})
.check((argv,options) =>{
    console.log('yargs',argv)
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv; 

module.exports= argv;