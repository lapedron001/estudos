class forma{
    calcularArea() {
        console.log('Método calcularArea da Forma');
    }
    
    calcularPerimetro() {
        console.log('Método calcularPerimetro da Forma');
    }    
}

class quadrado extends forma{
    constructor(lados){
        super()
        this.lados = lados
    }
}

const poligono = new quadrado(4)
poligono.calcularArea()
poligono.calcularPerimetro()
console.log(poligono.lados)