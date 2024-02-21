const animal = { tipo: 'Desconhecido' };
const gato = { cor: 'Preto' };

// Estabelece a relação de protótipo
gato.__proto__ = animal;

console.log(gato.tipo); // Saída: Desconhecido