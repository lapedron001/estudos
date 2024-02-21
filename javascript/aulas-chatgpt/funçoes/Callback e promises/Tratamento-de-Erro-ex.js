function divisao(x, y, sucessoCallback, errorCallback){
    if (x == 0 || y == 0){
        errorCallback('Não se pode dividir por zero')
    } else {
        const resultado = x / y
        sucessoCallback(resultado)
    }
}

divisao(6, 0, function(resultado){
    console.log(`O resultado é ${resultado}`)
}, function(error){
    console.error(`${error}`)
})