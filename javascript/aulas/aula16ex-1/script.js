function adicionar(){
    var tab = document.getElementById('valor')
    var n1 = Number(document.getElementById('n').value)
    if (n1 <= 0 || n1 > 100 || n.includes(n1)) {
        window.alert('Valor inválido ou já existe na lista.');
    } else {
        n.push(n1)
        tab.innerHTML = ''
        for (p in n){
            var item = document.createElement('option')
            item.text = `Valor ${n[p]} adicionado.`
            tab.appendChild(item)
        }
    }
}


var n = [] 

function finalizar(){
    var res = document.getElementById('res')
    res.innerHTML = `Ao todo, temos ${n.length} numeros cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, n)} <br>`
    res.innerHTML += `O menor valor informado foi ${Math.min.apply(null, n)} <br>`
    var soma = 0
    var media = 0
    for(var p in n){
        soma += n[p]
        media = soma / n.length
    }
    res.innerHTML += `Somando todos os valores temos ${soma} <br>`
    res.innerHTML += `A media dos valores digitados é ${media}`
}