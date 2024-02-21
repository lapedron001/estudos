var res = document.getElementById('res')
var num = {
    numeros: function (a) {
        return a
    },
    operadores: function (b) {
        return b
    },
}

function add(value) {
    var currentValue = res.innerHTML

    var lastCharIsOperator = ['.','+', '-', '*', '/'].includes(currentValue.slice(-1))
    if (currentValue.length >= 10){
        res.innerHTML = currentValue.slice(1)
    } else if (currentValue == 'Error' || currentValue == 'undefined' || currentValue == 'NaN'){
        res.innerHTML = ''
    }
    if ((value == ']') && lastCharIsOperatorOrDot && (currentValue === '' || lastCharIsOperator)) {
        res.innerHTML += num.operadores(value)
    } else if (['-','+','.','*', '/'].includes(value) && lastCharIsOperator) {
        res.innerHTML = currentValue.slice(0, -1) + num.operadores(value)
    } else {
        res.innerHTML += num.numeros(value)
    }
}

function deletel() {
    var currentValue = res.innerHTML
    res.innerHTML = currentValue.slice(0, -1)
}

function reset() {
    res.innerHTML = ''
}

function calcular() {
    var currentValue = res.innerHTML
    try {
        res.innerHTML = eval(currentValue)
    } catch (error) {
        res.innerHTML = 'Error'
    }
}

function theme(n) {
    if (n == 1) {
        document.body.id = 'normal'
    } else if (n == 2) {
        document.body.id = 'tema2'
    } else {
        document.body.id = 'tema3'
    }
}
