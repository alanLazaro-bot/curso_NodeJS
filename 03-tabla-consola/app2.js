//tabla del 5
const fs = require('fs')


console.clear();
console.log('==================')
console.log('  Tabla del: 5')
console.log('==================')
     

const base= 5;
let salida = '';

for(let i = 1; i<=10;i++){
   
   salida+=`${base} x ${i} = ${base * i}\n`
}
console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creado`);
})

//Esta opcion requiere el uso de un try y un catch en caso de que suceda un error 
fs.writeFileSync(`tabla-${base}.txt`, salida)

console.log(`tabla-${base}.txt creado`)