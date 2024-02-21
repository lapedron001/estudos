function criarFuncoes() {
    const funcoes = []
  
    for (let i = 0; i < 5; i++) {
      funcoes.push(function() {
        console.log(i)
      })
    }
  
    return funcoes;
  }
  
  const minhasFuncoes = criarFuncoes();
  minhasFuncoes[0]() // Saída: 5 (em vez de 0)
  minhasFuncoes[1]() // Saída: 5 (em vez de 1)