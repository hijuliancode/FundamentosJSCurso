var x = 4, y = '4'

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}

x == y // true
x === y // false

sacha == otraPersona // false
sacha === otraPersona // false
// Esto es debido a que al contrario de valores primitivos, javascript no compara el valor del objeto, sino la referencía,
// en este caso sacha y otraPersona son referencias diferentes.

// Podemos solucionar apuntando a la misma referencia: 

var sacha = {
  nombre: 'Sacha'
}
var otraPersona = sacha

otraPersona == sacha // true
otraPersona === sacha // true

// En este lugar le decimos a otraPersona que apunte a la misma referencia de variable que apunta sacha
// al mismo lugar de la computadora que apunta la variable sacha

// al hacer:

otraPersona = {
  ...sacha
}

// también serán falsas las comparaciones

otraPersona == sacha // true
otraPersona === sacha // true

// Esto es porque estamos creando un nuevo objeto, al ser un nuevo objeto
// por más que desglocemos, es otro lugar en memoria ram 


// IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE

otraPersona = sacha; // 1. Si hacemos de otraPersona una referencía a sacha

otraPersona.nombre = 'Pepe'; // 2. Y asignamos un nuevo nombre a otra persona

sacha.nombre; // 3. El nombre de sacha también va a cambiar

// Porque estamos apuntando a la misma referencía de la variable