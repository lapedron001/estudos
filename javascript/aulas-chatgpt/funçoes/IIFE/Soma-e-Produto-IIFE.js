// com object
const resultadoOperacoes = (function(x, y) {
    return {
      soma: x + y,
      produto: x * y
    };
  })(3, 4);
  
  console.log(resultadoOperacoes.soma);    // Saída: 7
  console.log(resultadoOperacoes.produto); // Saída: 12
 
  
/* com array
const resultadoOperacoes = (function(x, y) {
    return [
      x + y,
      x * y
    ];
  })(3, 4);
  
  console.log(resultadoOperacoes[0]);    // Saída: 7
  console.log(resultadoOperacoes[1]); // Saída: 12  
*/