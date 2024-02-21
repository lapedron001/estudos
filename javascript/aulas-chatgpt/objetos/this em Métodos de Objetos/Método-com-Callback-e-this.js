const pessoa = {
    nome: 'pedro',
    saudação(callback) {
        callback(this.nome)
    }
}

function callbacksaudação(nome){
    console.log(`ola, ${nome}`)
}

pessoa.saudação(callbacksaudação)