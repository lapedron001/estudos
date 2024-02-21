const carro = {
  marca: 'Toyota'
};

carro.informarMarca = function() {
  console.log(`A marca do carro é ${this.marca}.`);
};

carro.informarMarca(); // Saída: A marca do carro é Toyota