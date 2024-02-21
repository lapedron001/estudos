const carro = {
    marca: 'toyota',
    modelo: 'volkes',
    ano: 2000,
    apresentar(){
        console.log(`Este é um ${this.marca} ${this.modelo} de ${this.ano}`)
    }
}

carro.apresentar()