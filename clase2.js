var nombre = 'Julian', apellido = 'Sosa'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// Interpolación de variables 
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // dentro de ${} podemos escribir código javascript, por ejemplo .toUpperCase()

var str = nombre.substr(0, 2) // Acceder a un string dentro de otro string, 

// Reto, ultima letra nombre
var ultimaLetraNombre = nombreCompleto.charAt(nombreCompleto.length - 1);