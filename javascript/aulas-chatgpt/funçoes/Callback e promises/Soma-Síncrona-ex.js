function soma(x, y, callback){
    const resultado = x + y
    callback(resultado)
}

soma(4, 6, function(resultado){
    console.log(`O resultado é ${resultado}`)
})