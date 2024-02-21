const aluno = {
    nome: 'pedrinho',
    idade: 15,
    curso: 'arduino'
}

const chaves = Object.keys(aluno)

for (let chave of chaves){
    console.log(`${chave}: ${aluno[chave]}`)
}