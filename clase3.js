var edad = 27

// Incrementar el valor de la variable
// edad = edad + 1
edad += 1

var peso = 75

// Decrementar el valor de la variable
// peso = peso - 2
peso -= 2

var sandwich = 1

// peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3

// peso = peso - jugarAlFutbol
peso -= jugarAlFutbol

// Decimales
var precioDeVino = 200.3

// var total = precioDeVino * 3
var total = Math.round(precioDeVino * 100 * 3) / 100
var totalStr = total.toFixed(2) // Siempre tener en cuenta 3 decimales despues del punto (600.90) en lugar de 1 (600.9)
var total2 = parseFloat(totalStr)

// Cuantas porciones le tocan a cada persona
var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
