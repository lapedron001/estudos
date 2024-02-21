function idade() { 
    var data = new Date()
    var res1 = res.querySelectorAll("#tag strong")
    res1.forEach(function(res, index) {
        if (index == 0){
            if (ano.value >= data.getFullYear() || ano.value < 1900 || ano.value == ''){
                res.innerHTML = '--'
                error(3)
            } else {
                res.innerHTML = Math.abs(ano.value - data.getFullYear())
                certo(3)
            }
        } else if (index == 1) {
            if (mes.value > 12 || mes.value == ''){
                res.innerHTML = '--'
                error(2)
            } else {
                res.innerHTML = Math.abs(mes.value - (data.getMonth() + 1))
                certo(2)
            }
            } else {
            if (dia.value > 30 || dia.value == ''){
                res.innerHTML = '--'
                error(1)
            } else {
                res.innerHTML = Math.abs(dia.value - (data.getDay() + 24))
                certo(1)
            }
        }
    })
}

function certo(n) {
    if (n == 1){
        dia.style.border = 'solid 1px #dbdbdb'
        p1.style.color = '#716f6fad'
        s1.style.display = 'none'
    } else if (n == 2){
        mes.style.border = 'solid 1px #dbdbdb'
        p2.style.color = '#716f6fad'
        s2.style.display = 'none'
    } else {
        ano.style.border = 'solid 1px #dbdbdb'
        p3.style.color = '#716f6fad'
        s3.style.display = 'none'
    }
}

function error(n){
    if (n == 1){
        dia.style.border = 'solid 1px #ff0000ab'
        p1.style.color = '#ff0000ab'
        s1.style.display = 'block'
    } else if (n == 2){
        mes.style.border = 'solid 1px #ff0000ab'
        p2.style.color = '#ff0000ab'
        s2.style.display = 'block'
    } else {
        ano.style.border = 'solid 1px #ff0000ab'
        p3.style.color = '#ff0000ab'
        s3.style.display = 'block'
    }
}