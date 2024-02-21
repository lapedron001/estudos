const formulario = {
    dados: 'Dados do formulário',
    configurarEvento: function() {
      const botaoEnvio = document.getElementById('botaoEnvio');
      botaoEnvio.addEventListener('click', function() {
        console.log(this.dados);
      });
    }
  };
  
  formulario.configurarEvento();
  // Saída (ao clicar no botão): Dados do formulário
  