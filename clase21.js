function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  let personaAlta = 1.8;
  if (this.altura >= personaAlta) {
    console.log(`Soy alto/a, mido ${this.altura}`);
  } else {
    console.log(`No soy alto/a, mido ${this.altura}`);
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.70)
var erika = new Persona('Erika', 'Luna', 1.80)
var arturo = new Persona('Arturo', 'Martinez', 1.75)
