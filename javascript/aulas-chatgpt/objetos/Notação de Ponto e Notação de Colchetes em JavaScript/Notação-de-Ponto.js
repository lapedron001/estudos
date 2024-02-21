const pessoa = {
  nome: 'Alice',
  idade: 25,
  solteira: true,
  cumprimentar: function() {
    console.log(`Olá, meu nome é ${this.nome}!`);
  }
};

console.log(pessoa.nome); // Saída: Alice
pessoa.cumprimentar(); // Saída: Olá, meu nome é Alice!