const contador = {
    valor: 0,
    incrementar(){
        setInterval(() => {
            this.valor++
            console.log(this.valor)
        }, 1000)
    }
}

contador.incrementar()