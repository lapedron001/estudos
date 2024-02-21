function saudacaoPersonalizada(nome){
    return function(){
        console.log(`Ola, ${nome}`)
    }
}

var saudacaojoao = saudacaoPersonalizada('joao')
saudacaojoao()
var saudacaomaria = saudacaoPersonalizada('Maria')
saudacaomaria()