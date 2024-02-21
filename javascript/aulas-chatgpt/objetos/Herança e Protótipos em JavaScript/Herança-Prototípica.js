function Animal(tipo) {
    this.tipo = tipo;
  }
  
  function Cachorro(raca) {
    this.raca = raca;
  }
  
  // Estabelece a relação de herança
  Cachorro.prototype = new Animal('Mamífero');
  
  const meuCachorro = new Cachorro('Labrador');
  console.log(meuCachorro.tipo); // Saída: Mamífero  