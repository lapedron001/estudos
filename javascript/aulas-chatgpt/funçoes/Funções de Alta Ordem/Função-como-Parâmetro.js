function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function executarOperacao(num1, num2, operaçao){
    var resultado = operaçao(num1, num2)
    console.log(resultado)
}

executarOperacao(1, 2, somar)
executarOperacao(2, 1, subtrair)