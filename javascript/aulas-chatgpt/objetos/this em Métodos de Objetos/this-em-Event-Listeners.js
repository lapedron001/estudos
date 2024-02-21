const botao = document.getElementById('meuBotao');
const objeto = {
  propriedade: 'Valor',
  metodo: function() {
    botao.addEventListener('click', function() {
      console.log(this.propriedade); // `this` não se refere ao objeto aqui
    });
  }
};

objeto.metodo();