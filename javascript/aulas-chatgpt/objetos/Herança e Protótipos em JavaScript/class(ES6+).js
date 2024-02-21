class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  const pessoa = new Pessoa('Ana', 28);
  pessoa.apresentar(); // Saída: Olá, meu nome é Ana e tenho 28 anos.  