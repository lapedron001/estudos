function operacaoPromissificada(x, y){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            const resultado = x + y
            if (resultado > 0){
                resolve(resultado)
            } else{
                reject('O resultado nao é positivo')
            }
        }, 1000)
    })
}

operacaoPromissificada(3, 4)
    .then(function(resultado) {
        console.log(`O resulatado da operação é ${resultado}`)
    })
    .catch(function(erro) {
        console.log(`ERRO: ${erro}`)
    })