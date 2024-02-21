const livro = {
    titulo: 'Aventuras Fantásticas',
    autor: 'J.K. Rowling',
    ano: 2001
  };

  const valores = Object.values(livro)

  console.log(valores)

  for (let valor of valores){
    console.log(valor)
  }