var livro = {
    titulo: 'opa',
    autor: 'epa',
    ano: 1999,
    genero: 'terror',
    detalhes(){
        console.log(`${livro.titulo} com o genero de ${livro.genero}, escrito por ${livro.autor} no ano de ${livro.ano}`)
    }
}

livro.detalhes()