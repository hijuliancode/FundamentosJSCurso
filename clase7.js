var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad() {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
}

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
 