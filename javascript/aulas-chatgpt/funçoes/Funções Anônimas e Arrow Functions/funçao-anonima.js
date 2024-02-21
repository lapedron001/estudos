//Expressão de Função Anônima:
const soma = function(x, y) {
    return x + y;
  };
  
  console.log(soma(3, 5)); // Saída: 8  

//Como Argumento de Outra Função:
const imprimirResultado = function(resultado) {
    console.log(resultado);
  };
  
imprimirResultado(soma(3, 5)); // Saída: 8