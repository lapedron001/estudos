var palavras = ['opa', 'epa', 'palhaço', 'dreneias']

var palavrasgrandes = palavras.filter(function(p){
    return p.length >= 5
})

console.log(palavrasgrandes)