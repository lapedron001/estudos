var numeros = [1, 2, 3, 4, 5]

var soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
})

console.log(soma)