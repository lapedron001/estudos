function criarContador(){
    let contador = 0

    function incrementar(){
        contador++
        console.log(contador)
    }

    return incrementar
}

const contador = criarContador()
contador()
contador()