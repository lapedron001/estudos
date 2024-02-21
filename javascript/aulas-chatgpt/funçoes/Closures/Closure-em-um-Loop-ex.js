function criarFuncoes(n) {
    const funcoes = []
    for(let i = 1; n >= i; i++){
        funcoes.push(function(){
            console.log(i)
        })
    }

    return funcoes
}

let minhasFuncoes = criarFuncoes(5)
minhasFuncoes[0]()
minhasFuncoes[1]()
minhasFuncoes[2]()
minhasFuncoes[3]()
minhasFuncoes[4]()
