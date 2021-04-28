console.log('Inicio de programa');

setTimeout(() => {
    console.log('Primer Timeout'); /*Esta funcion hace que se ejecute el console log  con un    retraso   de 3 segundos*/
}, 3000)

setTimeout(() => {
    console.log('Segundo Timeout');
}, 0)

setTimeout(() => {
    console.log('Tercer Timeout');
}, 0)

console.log('Fin de programa');

//Todas estas instrucciones son instrucciones no bloqueantes
/*Se ejecuta todo el codigo a la vez pero como las funciones son procesos que toman mas tiempo que un console.log entonces se ordenan los procesos desde los que menos tiempo toman en ejecutarse hasta los que mas tiempo toman. */ 