const minhaPromise = new Promise(function(resolve, reject) {
    const operacaoBemSucedida  = true

    if (operacaoBemSucedida) {
        resolve('a operação foi bem')
    } else {
        reject('a operação falhou')
    }
})

minhaPromise 
    .then(function(resultado) {
        console.log('sucesso', resultado)
    })
    .catch(function(erro) {
        console.error('falha', erro)
    })