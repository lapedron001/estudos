function criarTemporizador(segundos){
    return function(){
        setTimeout(function(){
            console.log('tempo, esgotado')
        }, segundos * 1000)
    }
}

const Temporizador = criarTemporizador(5)
Temporizador()