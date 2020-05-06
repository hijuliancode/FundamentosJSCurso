var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

// persona.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

// En primer lugar recibe el acumulador, en segundo lugar cada una de las personas
function reducer(acum, persona) {
  // simplemente lo que tenemos que hacer es modificar el valor que queremos que tenga el nuevo acumulador.
  return acum + persona.cantidadDeLibros;  
}

// Otra forma de escribir reducer, ES6, (puede ser const en lugar de var)
var reducer = (acum, persona) => acum + persona.cantidadDeLibros
// O también desglozando pesona
var reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

// reducer es una función que le paso como parametro, y el 0 es el valor inicial del acumulador
// Arriba en var cum = 0, lo inicializabamos en 0, ahora es aquí.
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)


// Demo Profesor
// const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
// var totalDeLibros = personas.reduce(reducer, 0)
// console.log(`En total todos tienen ${totalDeLibros} libros`)
