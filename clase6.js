var sacha = {
  nombre: 'Sacha', // Clave, valor
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

// function imprimirNombreEnMayusculas(nombre) { // Opción 1
//   console.log(nombre.toUpperCase())
// }

// function imprimirNombreEnMayusculas(persona) { // Opción 2
//   var nombre = persona.nombre;
//   console.log(nombre)
// }

// function imprimirNombreEnMayusculas({ nombre }) { // Opción 3
//   console.log(nombre.toUpperCase())
// }

function imprimirNombreEnMayusculas({ nombre }) { // Opción 3, nuevas versiones de JS, destructurar el objeto en el argumento
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' }) 
imprimirNombreEnMayusculas() // Error, no se esta pasando un atributo y la función espera uno
imprimirNombreEnMayusculas({ apellido: 'Gomez' }) // Error, el objeto no tiene el atributo nombre


// Reto
var valentina = {
  nombre: 'Valentina',
  apellido: 'S',
  edad: 8
}

var ginna = {
  nombre: 'Ginna',
  apellido: 'M',
  edad: 18
}

var julian = {
  nombre: 'Julian',
  apellido: 'S',
  edad: 28
}

function imprimirNombreEnMayusculas({ nombre, apellido, edad }) {
  let saludo = `Hola me llamo ${nombre} ${apellido} y tengo ${edad} años`;
  console.log(saludo)
}

imprimirNombreEnMayusculas(valentina)
imprimirNombreEnMayusculas(ginna)
imprimirNombreEnMayusculas(julian)
