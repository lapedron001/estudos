function comprimento(){
    console.log(this.nome)
}

const usuario = {nome: 'pedro'}

const cumprimentoUsuario = comprimento.bind(usuario)

cumprimentoUsuario()