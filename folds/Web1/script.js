let numb1 = document.querySelector("input.minutes")
let geso = document.querySelector("input.minutes")
let cont = 0
const p = document.querySelector("p.convert")

geso.addEventListener('keyup', function(e){
    var key = e.which || e.keycode
    if (key == 13) {
        calcMin()
    }
})
function calcMin(){
    numb1 = document.querySelector("input.minutes").value
    numb1 = Number(numb1)
    cont = cont+numb1
    p.innerHTML = `${Math.floor(cont/60)} Hora(s) ${cont%60} Minuto(s)`
    geso.value = ''
}