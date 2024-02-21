const pessoa = {
    nome: 'Carlos',
    idade: 30,
    profissao: 'Médico'
  };

  for (let chave of Object.keys(pessoa)){
    console.log(`${chave}: ${pessoa[chave]}`)
  }