const pessoa = {
    nome: 'Alice',
    idade: 25,
    apresentar: function() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar(); // Saída: Meu nome é Alice e tenho 25 anos.