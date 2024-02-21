const fruta = {
    nome: 'maça',
    cor: 'Vermelha',
    preco: 2.5
  };

  const entradas = Object.entries(fruta)

  console.log(entradas)

  for (let entrada of entradas){
    console.log(`${entrada[0]}: ${entrada[1]}`)
  }