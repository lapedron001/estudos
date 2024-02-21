const dataAtual = new Date();

dataAtual.obterDiaSemana = function() {
  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return diasSemana[this.getDay()];
};

const diaSemana = dataAtual.obterDiaSemana();
console.log(`Dia da semana: ${diaSemana}`); // Saída: Dia da semana: Sexta-feira
