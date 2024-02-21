function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
  
  const pessoa = new Pessoa('Ana', 30);
  pessoa.saudacao(); // Saída: Olá, meu nome é Ana
  