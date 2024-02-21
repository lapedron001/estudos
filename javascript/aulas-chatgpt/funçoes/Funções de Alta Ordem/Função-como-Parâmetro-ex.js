function soma(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multplicar(a, b){
    return a * b
}

function aplicarOperacao(num1, num2, operaçao){
    var resultado = operaçao(num1, num2)
    console.log(resultado)
}

aplicarOperacao(4, 2, soma)
aplicarOperacao(4, 2, subtrair)
aplicarOperacao(4, 2, multplicar)
