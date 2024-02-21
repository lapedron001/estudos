let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
let pos = num.indexOf(7)
console.log(`${num}`)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
if (pos == -1) {
    console.log(`erro`)
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}