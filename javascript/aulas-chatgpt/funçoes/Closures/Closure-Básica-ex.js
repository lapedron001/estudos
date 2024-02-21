function criarContador(n){
    let resultado = []
    for (let c = 1; n >= c; c++){
        resultado.push(c)
    }

    return resultado
}

let contador = criarContador(5)
console.log(contador)