var nombre = 'Sacha' // Variable de alcance global (window en este caso)
window.nombre; // Accedemos a la variable que esta en el contexto global

function imprimirNombreEnMayusculas() {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreEnMayusculas() // Ejecutamos y modificamos el contexto clobal

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase() // a pesar de tener el mismo nombre de la variable gloal, no hace referencía pues esta es una variable local
  console.log(nombre)
}
imprimirNombreEnMayusculas(nombre) // al crear un parametro creamos una variable local y no ensuciamos el contexto global
