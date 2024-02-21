function adicionar() {
    var tab = document.getElementById('valor');
    var n1 = Number(document.getElementById('n').value);

    if (n1 <= 0 || n1 > 100 || n.includes(n1)) {
        window.alert('Valor inválido ou já existe na lista.');
    } else {
        n.push(n1);
        tab.innerHTML = ''; // Limpa o conteúdo anterior para recriar a lista corretamente

        for (var i = 0; i < n.length; i++) {
            var item = document.createElement('option');
            item.text = `Valor ${n[i]} Adicionado, posição ${i}, tamanho ${n.length}`;
            tab.appendChild(item);
        }
    }
}

var n = [];
