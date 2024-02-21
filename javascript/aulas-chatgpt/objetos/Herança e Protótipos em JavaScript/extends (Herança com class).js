class Animal {
    constructor(tipo) {
      this.tipo = tipo;
    }
  }
  
  class Cachorro extends Animal {
    constructor(raca) {
      super('Mamífero'); // Chama o construtor da classe pai
      this.raca = raca;
    }
  }
  
  const meuCachorro = new Cachorro('Labrador');
  console.log(meuCachorro.tipo); // Saída: Mamífero  