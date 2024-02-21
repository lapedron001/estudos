const pessoa = {
    nome: 'Alice',
    idade: 25,
    solteira: true,
    endereco: {
      rua: 'Rua Principal',
      cidade: 'Cidade A'
    },
    comprimentar: function(){
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}

pessoa.comprimentar()
console.log(pessoa.nome) // saida: Alice
console.log(pessoa['idade']) // saida: 25

pessoa.solteira = false
pessoa.idade = 20

console.log(pessoa.solteira) // saida: false
console.log(pessoa.idade) // saida: 20

delete pessoa.solteira

console.log(pessoa.solteira) // saida: undefined