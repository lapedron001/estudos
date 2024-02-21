var numeros = [1,2,3,4,5]

numeros.forEach((numero, indice, array) => {
    setTimeout(() => {
        console.log(numero, indice, array)
    }, numero * 1000)
})