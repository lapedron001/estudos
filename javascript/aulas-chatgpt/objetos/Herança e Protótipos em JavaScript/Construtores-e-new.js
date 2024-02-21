function Carro(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

const meuCarro = new Carro('toyota', 'Corolla')
console.log(meuCarro.marca)