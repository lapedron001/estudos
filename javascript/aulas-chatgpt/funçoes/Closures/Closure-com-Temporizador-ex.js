function criarTemporizador(segundos, mensagem){
    return function(){
        setTimeout(function(){
            console.log(mensagem)
        }, segundos * 1000)
    }
}

const Temporizador = criarTemporizador(5, 'ola')
Temporizador()