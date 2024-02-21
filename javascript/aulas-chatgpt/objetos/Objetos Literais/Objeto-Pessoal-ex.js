var pessoa = {
    nome: 'maria',
    idade: 45,
    profissao: 'pintora',
    cumprimentar(){
        console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, trabalho como ${pessoa.profissao}`)
    }
}

pessoa.cumprimentar()