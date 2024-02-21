function verificar() {
    resetarEstilos();

    if (inome.value === '' || !/^[a-zA-Z\s]*$/.test(inome.value)) {
        aplicarErro(inome, p1);
    } else if (icard.value === '' || icard.value.length < 16) {
        resetarEstilos();
        aplicarErro(icard, p2);
    } else if (imes.value === '' || imes.value > 12 || isNaN(imes.value)) {
        resetarEstilos();
        aplicarErro(imes, p3);
    } else if (iano.value === '' || iano.value < 24 || isNaN(iano.value)) {
        resetarEstilos();
        aplicarErro(iano, p4);
    } else if (icvc.value === '' || isNaN(icvc.value)) {
        resetarEstilos();
        aplicarErro(icvc, p5);
    } else {
        resetarEstilos();
        Data.innerHTML = `${imes.value}/${iano.value}`;
        card.innerHTML = icard.value;    
        nome.innerHTML = inome.value;
        cvc.innerHTML = icvc.value;
        p.style.display = 'none';
        res.style.display = 'block';
        butao.innerHTML = 'Continue';
    }
}

function aplicarErro(elemento, paragrafo) {
    elemento.style.border = 'solid 1px #ff5252';
    paragrafo.style.display = 'block';
}

function resetarEstilos() {
    const elementos = [inome, icard, imes, iano, icvc];
    const paragrafos = [p1, p2, p3, p4, p5];

    elementos.forEach(elemento => elemento.style.border = 'solid 1px #00000021');
    paragrafos.forEach(paragrafo => paragrafo.style.display = 'none');
}

function CardNumber(input) {
    let cardNumber = input.value.replace(/\D/g, '');
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = cardNumber;
}
