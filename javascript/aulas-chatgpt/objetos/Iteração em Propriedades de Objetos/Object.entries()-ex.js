const filme = {
    nome: 'A rua do amanha',
    diretor: 'sthephen halkin',
    ano: 1990
}

const entradas = Object.entries(filme)

for(let entrada of entradas){
    console.log(`${entrada[0]}: ${entrada[1]}`)
}