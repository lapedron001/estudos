function criarSequencia(numero){
    return function(){
        for (let i = numero; numero <= 10; i++){
            setTimeout(function(){
                console.log(i)
            }, (i-numero) * 1000)
        }
    }
}
var seq = criarSequencia(1)
seq()