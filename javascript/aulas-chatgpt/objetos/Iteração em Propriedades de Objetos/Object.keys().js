const pessoa = {
    nome: 'Alice',
    idade: 25,
    profissao: 'Engenheira'
  };
  
  const chaves = Object.keys(pessoa);

  console.log(pessoa)
  console.log(chaves)
  
  for (let chave of chaves) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  