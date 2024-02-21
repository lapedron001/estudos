function mostrarDataAtual(){
    var data = new Date
    var dia = data.getDate()
    var mes = data.getUTCMonth() + 1
    var ano = data.getFullYear()
    console.log(`${dia}|${mes}|${ano}`)
}

mostrarDataAtual()