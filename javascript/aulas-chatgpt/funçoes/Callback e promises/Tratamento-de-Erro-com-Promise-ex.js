function esperar(){
    return new Promise(function(resolve, reject) {
        if (esperar == 0) {
        setTimeout(function(){
            resolve()
        }, 2000)
     } else {
        reject('deu erro men')
     }
    })
}

esperar()
    .then(function(){
        console.log('Tempo de espera concluido')
    })
    .catch(function(error) {
        console.error('erro', error)
    })