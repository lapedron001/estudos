function saudaçao(){
    console.log(`Ola, ${this.nome}`)
}

const usuario = {nome: 'joao'}

const saudaçaousuario = saudaçao.bind(usuario)
saudaçaousuario()