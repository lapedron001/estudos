function criarMultiplicador(fator){
    return function(numero){
        return numero * fator
    }
}

var duplicar = criarMultiplicador(2)
console.log(duplicar(5))

var triplicar = criarMultiplicador(3)
console.log(triplicar(5))