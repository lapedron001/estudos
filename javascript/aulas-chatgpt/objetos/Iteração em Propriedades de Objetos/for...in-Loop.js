const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022
  };
  
for(let propriedade in carro){
    console.log(`${propriedade}, ${carro[propriedade]}`)
}  