const computador = {
    marca: 'Asus',
    modelo: 'ops3',
    ano: 2030
}

for (let propriedade in computador){
    console.log(`${propriedade}: ${computador[propriedade]}`)
}