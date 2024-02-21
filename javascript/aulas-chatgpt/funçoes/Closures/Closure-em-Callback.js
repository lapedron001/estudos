function executarEmOrdem(funçao1, funçao2, segundos){
    return function(){
        funçao1()
        setTimeout(function(){
            funçao2()
        }, segundos * 1000)
    }
}

function imprimirMensagem1(n){
    console.log('primeira mensagem')
}

function imprimirMensagem2(){
    console.log('segunda mensagem')
}

var mensagem = executarEmOrdem(imprimirMensagem1, imprimirMensagem2, 3)
mensagem()