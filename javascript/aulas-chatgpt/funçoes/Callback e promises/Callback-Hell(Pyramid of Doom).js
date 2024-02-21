function operacao1(callback){
    setTimeout(function(){
        console.log('operação 1 concluida')
        callback()
    }, 1000)
}

function operacao2(callback){
    setTimeout(function(){
        console.log('operação 2 concluida')
        callback()
    }, 1000)
}

function operacao3(callback){
    setTimeout(function(){
        console.log('operação 3 concluida')
        callback()
    }, 1000)
}

operacao1(function(){
    operacao2(function(){
        operacao3(function(){
            console.log('todas as operaçoes concluidas')
        })
    })
})