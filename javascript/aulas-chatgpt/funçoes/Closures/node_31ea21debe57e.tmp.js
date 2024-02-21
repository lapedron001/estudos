function criarSequencia(numero){
    return function(){
        setInterval(calc(numero), 1000)
    }
}

function calc(numero){
    return function(){
        while(numero <= 10){
            console.log(numero)
            numero++
        }
    }
}

var seq = criarSequencia(1)
seq()