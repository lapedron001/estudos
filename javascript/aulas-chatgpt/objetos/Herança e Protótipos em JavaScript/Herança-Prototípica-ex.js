function veiculo(carro, modelo){
    this.carro = carro
    this.modelo = modelo
}

function carro(numportas){
    this.numportas = numportas
}

carro.prototype = new veiculo('toyota', 'Corolla')

const meuCarro = new carro(4)
console.log(meuCarro.modelo)