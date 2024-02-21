function calcular() {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora <= 12){
        document.body.style.background = '#CBBB8E'
        img.src = 'imagens/manha.jpg'
    } else if (hora <= 18) {
        document.body.style.background = '#A87965'
        img.src = 'imagens/tarde.jpg'
    } else {
        document.body.style.background = '#48494A'
        img.src = 'imagens/noite.jpg'
    }
}