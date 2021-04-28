const deadpool = {

    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre} ${ this.apellido }`
    }
}

console.log(deadpool.getNombre())

const {nombre, apellido, poder } = deadpool

console.log(nombre, apellido, poder)


const heroes = ['Deadpool', 'Superman', 'Batman']

const [ a,b ,c ]= heroes

const [ , , h3]= heroes