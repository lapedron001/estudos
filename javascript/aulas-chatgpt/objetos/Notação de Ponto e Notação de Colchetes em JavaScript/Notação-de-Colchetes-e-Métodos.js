const pessoa = {
    nome: 'Alice',
    idade: 25,
    cumprimentar: function() {
      console.log(`Olá, meu nome é ${this.nome}!`);
    }
  };
  
  const metodo = 'cumprimentar';
  pessoa[metodo](); // Saída: Olá, meu nome é Alice!