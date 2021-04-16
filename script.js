// Elements HTML
let body = document.querySelector('body')
// Buttons
let button = document.querySelector('input#but_p2')
button.addEventListener('click', buttonF)
function buttonF() {
    let FO = document.querySelector('input#FO')
    let DE = document.querySelector('input#DE')
    let CO = document.querySelector('input#CO')
    let IN = document.querySelector('input#IN')
    let SA = document.querySelector('input#SA')
    let CA = document.querySelector('input#CA')
    let PO = document.querySelector('input#PO')
    if (FO.value == '' || DE.value == '' || CO.value == '' || IN.value == '' || SA.value == '' || CA.value == '' || PO.value == '') {
        alert('Algum campo está vazio')
    } else {
        FO = Number(FO.value)
        DE = Number(DE.value)
        CO = Number(CO.value)
        IN = Number(IN.value)
        SA = Number(SA.value)
        CA = Number(CA.value)
        let lista = [FO, DE, CO, IN, SA, CA]
        for (let c = 0; c < 6; c++){
            if (isNaN(lista[c]) == true) {
                console.log('Numero')
                break
            } else {
                console.log('Normal')
                if (c == 5) {
                    apr()
                }
            }
        }
    }
        
function apr(){
    body.innerHTML = ``
}
}