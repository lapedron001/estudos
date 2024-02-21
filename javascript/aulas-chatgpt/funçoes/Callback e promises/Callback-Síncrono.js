function operacaoSincrona(x, y, callback){
    const resultado = x + y
    callback(resultado)
}

operacaoSincrona(2, 3, function(resultado){
    console.log(`O resultado da operaçção é ${resultado}`)
})