function criarSequencia(numero, intervalo){
    return function(){
        for (let i = numero; i <= 10; i++){
            setTimeout(function(){
                console.log(i)
            }, (i-numero) * (intervalo * 1000))
        }
    }
}
var seq = criarSequencia(1, 1)
seq()