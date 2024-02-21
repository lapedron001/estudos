const operacaoAssincrona = function() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Operação assíncrona concluída.');
      resolve();
    }, 1000);
  });
};

operacaoAssincrona()
  .then(function() {
    console.log('Primeira operação concluída.');
    return operacaoAssincrona();
  })
  .then(function() {
    console.log('Segunda operação concluída.');
  })
  .catch(function(erro) {
    console.error('Erro:', erro);
  });
