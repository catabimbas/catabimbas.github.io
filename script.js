// Elements HTML
let body = document.querySelector('body')
// Buttons
let button = document.querySelector('input#but_p2')
button.addEventListener('click', buttonF)
function buttonF() {
    let FO = document.querySelector('input#FO')
    let CO = document.querySelector('input#CO')
    let TA = document.querySelector('input#TA')
    let DE = document.querySelector('input#DE')
    let AP = document.querySelector('input#AP')
    let IN = document.querySelector('input#IN')
    let PO = document.querySelector('input#PO')
    let ED = document.querySelector('input#ED')
    let SO = document.querySelector('input#SO')
    let lista = [
        FO.value,
        CO.value,
        TA.value,
        DE.value,
        AP.value,
        IN.value,
        PO.value,
        ED.value,
        SO.value
    ]
    for (let c = 0; c < lista.length ; c++){
        if (lista[c] == '' || isNaN(lista[c]) == true) {
            alert('Verifique se não deixou algum campo vazio ou colocou alguma letra')
            break
        } else if (c >= lista.length-1) {
            FO = Number(FO.value)
            CO = Number(CO.value)
            TA = Number(TA.value)
            DE = Number(DE.value)
            AP = Number(AP.value)
            IN = Number(IN.value)
            PO = Number(PO.value)
            ED = Number(ED.value)
            SO = Number(SO.value)
            apr()
        }
    }
        
function apr(){
    body.innerHTML = ``
}
}