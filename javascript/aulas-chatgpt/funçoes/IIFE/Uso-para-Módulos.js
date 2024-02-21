const meuModulo = (function() {
    let contador = 0

    function incrementar(){
        contador++
    }

    function obterContador(){
        return contador
    }

    return {
        incrementar,
        obterContador
    }
})(1)

meuModulo.incrementar()
console.log(meuModulo.obterContador())