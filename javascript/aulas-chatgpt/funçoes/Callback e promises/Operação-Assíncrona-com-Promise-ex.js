function esperar(){
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve()
        }, 2000)
    })
}

esperar()
    .then(function(){
        console.log('Tempo de espera concluido')
    })