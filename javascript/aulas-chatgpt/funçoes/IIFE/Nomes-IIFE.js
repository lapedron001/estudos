(function(nome1, nome2) {
    console.log(`Ola, ${nome1} e ${nome2}`)
})('joao', 'maria')

//arrow functions
var nome = ((nome1, nome2) => {
    console.log(`Ola, ${nome1} e ${nome2}`)
})('joao', 'maria')