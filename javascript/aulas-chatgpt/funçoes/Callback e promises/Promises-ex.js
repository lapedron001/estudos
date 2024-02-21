function operacao1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Operação 1 concluida')
            resolve()
        }, 1000)
    })
}

function operacao2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Operação 2 concluida')
            resolve()
        }, 1000)
    })
}

function operacao3(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Operação 3 concluida')
            resolve()
        }, 1000)
    })
}

operacao1()
    .then(operacao2)
    .then(operacao3)
    .then(function(){
        console.log('todas as operaçoes executadas com uso de promises')
    })