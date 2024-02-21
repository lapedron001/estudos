(function (x){
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`)
    }
})(6)

/* versão com arrow function
var tabuada = ((x) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`)
    }
})(1)
*/