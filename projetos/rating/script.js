function submit(n){
    var star = document.getElementById('star')
    var res = document.getElementById('res')
    var s = document.getElementById('sp')
    s.innerHTML = `You selected  out ${n} of 5`
    star.innerHTML = ''
    res.style.display = 'block'
}