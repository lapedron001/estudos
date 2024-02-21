const animal = { tipo: 'Desconhecido' };
const gato = Object.create(animal);
gato.cor = 'Preto';

console.log(gato.tipo); // Saída: Desconhecido