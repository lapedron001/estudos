const animal = {tipo: 'mamifero', som: 'miado'}
const gato = Object.create(animal)
gato.cor = 'preto'

console.log(gato.som)