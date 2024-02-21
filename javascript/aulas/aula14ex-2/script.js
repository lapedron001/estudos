function tabuada(){
    var t = Number(document.getElementById('tab').value)
    var res = document.getElementById('res')
    var n = 1  
        res.innerHTML = ''
        while (n <= 10){
            res.innerHTML += `${t} x ${n} = ${t*n} <br>`
            n++
        }
}