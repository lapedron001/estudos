function valor(){
    var ipag = Number(document.getElementById('ipag').value)
    
    if (check.checked == false){
        m.innerHTML = '/Month'
        if (ipag == 1){
            out.innerHTML = `$8.00`
            pagi.innerHTML = '10K'
        } else if (ipag == 2){
            out.innerHTML = `$12.00`
            pagi.innerHTML = '50K'
        } else if (ipag == 3){
            out.innerHTML = `$16.00`
            pagi.innerHTML = '100K'
        } else if (ipag == 4){
            out.innerHTML = `$24.00`
            pagi.innerHTML = '500K'
        } else {
            out.innerHTML = `$36.00`
            pagi.innerHTML = '1M'
        }
    }else {
            m.innerHTML ='/Year'
        if (ipag == 1){
            out.innerHTML = `$6.00`
            pagi.innerHTML = '10K'
        } else if (ipag == 2){
            out.innerHTML = `$9.00`
            pagi.innerHTML = '50K'
        } else if (ipag == 3){
            out.innerHTML = `$12.00`
            pagi.innerHTML = '100K'
        } else if (ipag == 4){
            out.innerHTML = `$18.00`
            pagi.innerHTML = '500K'
        } else {
            out.innerHTML = `$27.00`
            pagi.innerHTML = '1M'
        }
    }
}