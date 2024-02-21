function operacaoComErro(x, y, sucessoCallback, errorCallback) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      errorCallback('Os argumentos devem ser números')
      return
    }
  
    const resultado = x + y
    sucessoCallback(resultado)
  }
  
  operacaoComErro('3', 4, 
    function(resultado) {
      console.log(`O resultado da operação é: ${resultado}`)
    },
    function(erro) {
      console.error(`${erro}`)
    }
  )
  