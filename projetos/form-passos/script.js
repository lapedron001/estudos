var p1 = document.getElementById('passo1')
var p2 = document.getElementById('passo2')
var p3 = document.getElementById('passo3')
var p4 = document.getElementById('passo4')
var p5 = document.getElementById('passo5') 

function next(x){
    if (x == 1){
        if (info()) {
            window.alert('Todas as verificações passaram com sucesso!');
            passos(1)
        } else {
            window.alert('Pelo menos uma verificação falhou.');
        }
    } else if(x == 2){
        passos(2)
    } else if(x == 3){
        passos(3)
    } else if(x == 4){
        passos(4)
    }
}

function back(b){
    if (b == 1){
        passos(0)
    } else if (b == 2) {
        passos(1)
    } else {
        passos(2)
    }
}


function passos(p){
    if (p == 0){
        p1.style.display = 'block'
        p2.style.display = 'none'
        nav2.style.color = 'white'
        nav2.style.backgroundColor = '#473dff'
        nav1.style.color = '#02295a'
        nav1.style.backgroundColor = '#bfe2fd'
    } else if (p == 1){
        p1.style.display = 'none'
        p2.style.display = 'block'
        p3.style.display = 'none'
        nav1.style.color = 'white'
        nav1.style.backgroundColor = '#473dff'
        nav3.style.color = 'white'
        nav3.style.backgroundColor = '#473dff'
        nav2.style.color = '#02295a'
        nav2.style.backgroundColor = '#bfe2fd'
    } else if (p == 2){
        p2.style.display = 'none'
        p3.style.display = 'block'
        p4.style.display = 'none'
        nav4.style.color = 'white'
        nav4.style.backgroundColor = '#473dff'
        nav2.style.color = 'white'
        nav2.style.backgroundColor = '#473dff'
        nav3.style.color = '#02295a'
        nav3.style.backgroundColor = '#bfe2fd'
    } else if(p == 3){
        p4.style.display = 'block'
        p3.style.display = 'none'
        nav3.style.color = 'white'
        nav3.style.backgroundColor = '#473dff'
        nav4.style.color = '#02295a'
        nav4.style.backgroundColor = '#bfe2fd'
        final()
    } else if(p == 4){
        p5.style.display = 'block'
        p4.style.display = 'none'
        nav3.style.color = 'white'
        nav3.style.backgroundColor = '#473dff'
        nav4.style.color = '#02295a'
        nav4.style.backgroundColor = '#bfe2fd'
    }
}

function check(c){
    var add = document.getElementById(`add${c}`)
    var cn = document.getElementById(`c${c}`)

    if(cn.checked == true){
        add.style.border = 'solid 1px #473dff'
        adds(c)
    } else{
        add.style.border = 'solid 1px #adbeff'
        remove(c)
    }
}

function final(){
    var total = document.getElementById('total');
    total.innerHTML = calc();
}

function calc(){
    var monthlyTotal = 0;
    var yearlyTotal = 0;

    // Verifica se os valores mensais estão sendo exibidos
    var monthlyDisplayed = (v.innerHTML.indexOf('/mo') !== -1);

    // Verifica e calcula o total dos planos
    if (monthlyDisplayed) {
        if (h4.innerHTML.includes('Arcade')) {
            monthlyTotal += 9;
        } else if (h4.innerHTML.includes('Advanced')) {
            monthlyTotal += 12;
        } else if (h4.innerHTML.includes('Pro')) {
            monthlyTotal += 15;
        }
    } else {
        if (h4.innerHTML.includes('Arcade')) {
            yearlyTotal += 90;
        } else if (h4.innerHTML.includes('Advanced')) {
            yearlyTotal += 120;
        } else if (h4.innerHTML.includes('Pro')) {
            yearlyTotal += 150;
        }
    }

    // Verifica e calcula o total dos adicionais
    if (h5.style.display === 'block') {
        if (monthlyDisplayed) {
            monthlyTotal += (h6.innerHTML.includes('$1')) ? 1 : 2;
        } else {
            yearlyTotal += (h6.innerHTML.includes('$10')) ? 10 : 20;
        }
    }
    if (h7.style.display === 'block') {
        if (monthlyDisplayed) {
            monthlyTotal += (h8.innerHTML.includes('$2')) ? 2 : 4;
        } else {
            yearlyTotal += (h8.innerHTML.includes('$20')) ? 20 : 40;
        }
    }
    if (h9.style.display === 'block') {
        if (monthlyDisplayed) {
            monthlyTotal += (h10.innerHTML.includes('$2')) ? 2 : 4;
        } else {
            yearlyTotal += (h10.innerHTML.includes('$20')) ? 20 : 40;
        }
    }

    return monthlyDisplayed ? ('$' + monthlyTotal + '/mo') : ('$' + yearlyTotal + '/yr');
}


function remove(r){
    if (r == 1){
        h5.style.display = 'none'
        h6.style.display = 'none'
    }
    if (r == 2){
        h7.style.display = 'none'
        h8.style.display = 'none'
    }
    if (r == 3){
        h9.style.display = 'none'
        h10.style.display = 'none'
    }
}

function adds(a){
    if (a == 1){
        if (valor() == 0){
            h5.innerHTML = 'online services'
            h6.innerHTML = '$1/mo'
            h5.style.display = 'block'
            h6.style.display = 'block'
        } else{
            h5.innerHTML = 'online services'
            h6.innerHTML = '$10/yr'
            h5.style.display = 'block'
            h6.style.display = 'block'
        }
    } 
    if (a == 2){
        if (valor() == 0){
            h7.innerHTML = 'Larger storage'
            h8.innerHTML = '$2/mo'
            h7.style.display = 'block'
            h8.style.display = 'block'
        } else{
            h7.innerHTML = 'Larger storage'
            h8.innerHTML = '$20/yr'
            h7.style.display = 'block'
            h8.style.display = 'block'
        }
    } 
    if (a == 3){
        if (valor() == 0){
            h9.innerHTML = 'Customizable Profile'
            h10.innerHTML = '$2/mo'
            h9.style.display = 'block'
            h10.style.display = 'block'
        } else{
            h9.innerHTML = 'Customizable Profile'
            h10.innerHTML = '$20/yr'
            h9.style.display = 'block'
            h10.style.display = 'block'
        }
    }
}

function plan(l){
    if(l == 1){
        if (valor() == 0){
            h4.innerHTML = 'Arcade (Mouthly)'
            v.innerHTML = '$9/mo'
        } else{
            h4.innerHTML = 'Arcade (Yearly)'
            v.innerHTML = '$90/yr'
        }
    } else if(l == 2){
        if (valor() == 0){
            h4.innerHTML = 'Advanced (Mouthly)'
            v.innerHTML = '$12/mo'
        } else{
            h4.innerHTML = 'Advanced (Yearly)'
            v.innerHTML = '$120/yr'
        }
    } else{
        if (valor() == 0){
            h4.innerHTML = 'Pro (Mouthly)'
            v.innerHTML = '$15/mo'
        } else{
            h4.innerHTML = 'Pro (Yearly)'
            v.innerHTML = '$150/yr'
        }
    }
}

function valor(n){
    if (checke.checked == false){
        sp1.innerHTML = '$9/mo'
        sp2.innerHTML = '$12/mo'
        sp3.innerHTML = '$15/mo'
        sp4.innerHTML = '+$1/mo'
        sp5.innerHTML = '+$2/mo'
        sp6.innerHTML = '+$2/mo'
        mo.style.display = 'none'
        return 0
    } else{
        sp1.innerHTML = '$90/yr'
        sp2.innerHTML = '$120/yr'
        sp3.innerHTML = '$150/yr'
        sp4.innerHTML = '+$10/yr'
        sp5.innerHTML = '+$20/yr'
        sp6.innerHTML = '+$20/yr'
        mo.style.display = 'block'
        return 1
    }

}

function selecionar(n){
   

    i1.style.border = 'solid 1px #adbeff'
    i2.style.border = 'solid 1px #adbeff'
    i3.style.border = 'solid 1px #adbeff'

    if (n == 1){
        i1.style.border = 'solid 1px #473dff'
        plan(1)
    } else if (n == 2){
        i2.style.border = 'solid 1px #473dff'
        plan(2)
    } else{
        i3.style.border = 'solid 1px #473dff'
        plan(3)
    }
}

function info(){
    var nome = document.getElementById('inome');
    var email = document.getElementById('imail');
    var tel = document.getElementById('itel');
    var allValid = true;
    
    if (nome.value.trim() === '') {
        applyErrorStyle(nome);
        allValid = false;
    } else {
        applyValidStyle(nome);
    }

    if (email.value.trim() === '') {
        applyErrorStyle(email);
        allValid = false;
    } else if (!isValidEmail(email.value)) {
        applyErrorStyle(email);
        var p = document.getElementById("s1")
        p.innerHTML = "Please enter a valid email address."
        p.style.color = 'red'
        allValid = false;
    } else {
        applyValidStyle(email);
        var p = document.getElementById('s1')
        p.innerHTML = ''
    }

    if (tel.value.trim() === '') {
        applyErrorStyle(tel);
        allValid = false;
    } else {
        applyValidStyle(tel);
    }

    return allValid;

    function applyErrorStyle(element) {
        element.style.border = 'solid 1px red';
    }
    
    function applyValidStyle(element) {
        element.style.border = 'solid 1px #9699ab';
    }
    
    function isValidEmail(email) {
        // Basic email validation using a regular expression
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
}