function contar(){
    var i = Number(document.getElementById('inicio').value)
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    if (i != 0) {
        if (f == 0){
            res.innerHTML = 'Defina o Fim'
        } else if (i > f){
            res.innerHTML = 'Defina o Fimmm'
        } else if (p != 0){
            res.innerHTML = ''
            while (i <= f){
                res.innerHTML += ` ${i} >`
                i = i + p
            }
            res.innerHTML += ' Concluido'
        } else {
            res.innerHTML = 'Defina o Passo'
        }
    } else if (f == 0){
        res.innerHTML = 'Defina o Fim'
    } else {
        res.innerHTML = 'Defina o Inicio'
    }
}