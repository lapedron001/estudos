const pessoa = {
    nome: 'Bob',
    idade: 30,
    apresentar() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar(); // Saída: Meu nome é Bob e tenho 30 anos.  