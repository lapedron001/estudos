function verificar() {
    var fn = document.getElementById('fname')
    var ln = document.getElementById('lname')
    var mail = document.getElementById('mail')
    var sen = document.getElementById('sen')

    function createErrorImage() {
        var img = document.createElement('img')
        img.src = 'images/icon-error.svg'
        img.style.position = 'absolute'
        img.style.left = '85%'
        return img
    }

    if (fn.value.length == 0) {
        res1.innerHTML = '<P>First Name cannot be empty'
        fn.style.border = 'solid 1px red'
        fn.placeholder = ''
        res1.appendChild(createErrorImage())
        res1.lastChild.style.top = '7%'
    } else {
        fn.style.border = 'solid 1px gray'
        fn.placeholder = 'First Name'
        res1.innerHTML = ''
    }

    if (ln.value.length == 0) {
        res2.innerHTML = '<P>Last Name cannot be empty'
        ln.style.border = 'solid 1px red'
        ln.placeholder = ''
        res2.appendChild(createErrorImage())
        res2.lastChild.style.top = '26%'
    } else {
        ln.style.border = 'solid 1px gray'
        ln.placeholder = 'Last Name'
        res2.innerHTML = ''
    }

    if (mail.value.length == 0 || mail.value.indexOf('@') === -1) {
        res3.innerHTML = '<P>Looks like this is not an email'
        mail.style.border = 'solid 1px red'
        mail.placeholder = ''
        res3.appendChild(createErrorImage())
        res3.lastChild.style.top = '45%'
    } else {
        mail.style.border = 'solid 1px gray'
        mail.placeholder = 'email@example/com'
        res3.innerHTML = ''
    }

    if (sen.value.length == 0) {
        res4.innerHTML = '<P>Password cannot be empty'
        sen.style.border = 'solid 1px red'
        sen.placeholder = ''
        res4.appendChild(createErrorImage())
        res4.lastChild.style.top = '64%'
    } else {
        sen.style.border = 'solid 1px gray'
        sen.placeholder = 'Password'
        res4.innerHTML = ''
    }
}
