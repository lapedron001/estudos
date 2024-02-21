function mudar(n) {
    var img = document.getElementById(`i${n}`)
    var p = document.getElementById(`p${n}`)
    if (p.style.display != 'none') {
        p.style.display = 'none'
        img.src = 'assets/images/icon-plus.svg'
    } else {
        p.style.display = 'inline'
        img.src = 'assets/images/icon-minus.svg'
    }
}