const cidade = {
    nome: 'gigantopolis',
    populacao: '5 milhoes',
    estado: 'SP'
}

const valores = Object.values(cidade)

for (let valor of valores){
    console.log(valor)
}