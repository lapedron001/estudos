function criarContador(){
    var Contador = 0
    return function(){
        Contador++
        return Contador
    }
}

var Contador1 = criarContador()
var Contador2 = criarContador()

console.log(Contador1())
console.log(Contador1())
console.log(Contador2())