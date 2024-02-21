function operacaoSincrona(x, y, callback){
    setTimeout(function(){
    const resultado = x + y
    callback(resultado)
    }, 1000)
}

operacaoSincrona(2, 3, function(resultado){
console.log(`O resultado da operaçção é ${resultado}`)
})