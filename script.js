// Elements HTML
let body = document.querySelector('body')
let head = document.querySelector('head')
let div = document.createElement('div')
// Ficha 1
// Buttons
let button = document.querySelector('input#but_p2')
button.addEventListener('click', ETA1)
function ETA1() {
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
    for (let c = 0; c < lista.length; c++) {
        if (lista[c] == '' || isNaN(lista[c]) == true) {
            alert('Verifique se não deixou algum campo vazio ou colocou alguma letra')
            break
        } else if (c >= lista.length - 1) {
            FO = Number(FO.value)
            CO = Number(CO.value)
            TA = Number(TA.value)
            DE = Number(DE.value)
            AP = Number(AP.value)
            IN = Number(IN.value)
            PO = Number(PO.value)
            ED = Number(ED.value)
            SO = Number(SO.value)
            ETA2(FO, CO, TA, DE, AP, IN, PO, ED, SO)
        }
    }
}
// Ficha 2
    
function ETA2(Força, Const, Taman, Destr, Apare, Intel, Poder, Educa, Sorte) {
    body.innerHTML = `
    <div id="jobs">
        <select id="jobs" onchange="mudanca()">
            <option value="LoveCraftiana">Lovecraftiana (Passado)</option>
            <option value="Moderno">Moderno (Atual)</option>
        </select>
        <div id="hide">Selecione o ano presente do RPG</div>
        <div id="jLC" value="LoveCraftiana" hidden>
        LoveCraft
        <div>
        <p>
        ADVOGADO — Contabilidade, Direito, Usar Bibliotecas, duas perícias interpessoais (Charme, Lábia, Intimidação ou Persuasão), Psicologia, duas outras perícias.
        </p>
        <p>
        Nível de Crédito: 20–70 <br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        ARTISTA — Arte/Ofício (qualquer um), História ou Mundo Natural, uma perícia interpessoal (Charme, Lábia, Intimidação ou Persuasão), Outra Língua, Psico-logia, Encontrar, outras duas perícias.
        </p>
        <p>
        Nível de Crédito: 15-60<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + POD × 2 ou DES × 2.
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        ATLETA — Escalar, Saltar, Lutar (Briga), Cavalgar, uma perícia interpessoal (Charme, Lábia, Intimidação ou Per-suasão), Natação, Arremessar, uma outra perícia qualquer.
        </p>
        <p>
        Nível de Crédito: 6-45<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2.
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        CRIMINOSO — uma perícia interpessoal (Charme, Lábia, Intimidação ou Persuasão), Psicologia, Encontrar, Furtividade, mais quatro especialidades entre as seguin-tes: Avaliação, Disfarce, Lutar, Armas de Fogo, Chaveiro, Consertos Mecânicos e Prestidigitação. 
        </p>
        <p>
        Nível de Crédito: 3-80<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        DETETIVE PARTICULAR — Arte/Ofício (Fotografia), Disfarce, Direito, Usar Bibliotecas, uma perícia interpes-soal (Charme, Lábia, Intimidação ou Persuasão), Psico-logia, Encontrar, uma outra perícia qualquer (ex. Usar Computadores, Chaveiro, Armas de Fogo).
        </p>
        <p>
        Nível de Crédito: 9-30<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        ENGENHEIRO — Arte/Ofício (Desenho Técnico), Consertos Elétricos, Usar Bibliotecas, Consertos Mecâni-cos, Operar Maquinário Pesado, Ciências (Engenharia), Ciências (Física), uma outra perícia qualquer.
        </p>
        <p>
        Nível de Crédito: 20-60<br>
        Pontos de Perícias Ocupacionais: Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        FANÁTICO — História, duas perícias interpessoais (Charme, Lábia, Intimidação ou Persuasão), Psicologia, Furtividade, três outras perícias.
        </p>
        <p>
        Nível de Crédito: 0-30<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + APA × 2 ou POD × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        FAZENDEIRO — Arte/Ofício (Trabalhos de Fazenda), Dirigir Automóveis (ou Carroça), uma perícia interpes-soal (Charme, Lábia, Intimidação ou Persuasão), Con-sertos Mecânicos, Mundo Natural, Operar Maquinário Pesado, Rastrear, uma outra perícia qualquer.
        </p>
        <p>
        Nível de Crédito: 9–30<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        JORNALISTA — Artes/Ofício (Fotografia), História, Usar Bibliotecas, Língua Nativa, uma perícia interpessoal (Charme, Lábia, Intimidação ou Persuasão), Psicologia, duas outras perícias.
        </p>
        <p>
        Nível de Crédito: 9–30<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        MÉDICO  — Primeiros Socorros, Outra Língua (Latim), Medicina, Psicologia, Ciências (Biologia), Ciências (Farmácia), quaisquer duas outras perícias como especialidades acadêmicas ou pessoais (ex. um psi-quiatra pode escolher Psicanálise).
        </p>
        <p>
        Nível de Crédito: 30–80<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        MEMBRO DE TRIBO — Escalar, Lutar ou Arremessar, Mundo Natural, Escutar, Ocultismo, Encontrar, Natação, Sobrevivência (qualquer uma).
        </p>
        <p>
        Nível de Crédito: 0–15<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        MISSIONÁRIO — Arte/Ofício (qualquer um), Primei-ros Socorros, Consertos Mecânicos, Medicina, Mundo Natural, uma perícia interpessoal (Charme, Lábia, Inti-midação ou Persuasão), duas outras perícias.
        </p>
        <p>
        Nível de Crédito: 0–30<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        MÚSICO — Arte/Ofício (instrumento), uma perícia interpessoal (Charme, Lábia, Intimidação ou Persuasão), Escutar, Psicologia, quatro outras perícias.
        </p>
        <p>
        Nível de Crédito: 5–25<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou POD × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        OFICIAL DE POLÍCIA — Lutar (Briga), Armas de Fogo, Primeiros Socorros, uma perícia interpessoal (Charme, Lábia, Intimidação ou Persuasão), Direito, Psicologia, Encontrar e uma das seguintes perícias como uma espe-cialidade pessoal: Dirigir Automóveis ou Cavalgar.
        </p>
        <p>
        Nível de Crédito: 10–30<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou POD × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        OFICIAL MILITAR — Contabilidade, Armas de Fogo, Navegação, duas perícias interpessoais (Charme, Lábia, Intimidação ou Persuasão), Psicologia, Sobrevivência, uma outra perícia qualquer.
        </p>
        <p>
        Nível de Crédito: 20–60<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        PARAPSICÓLOGO — Antropologia, Arte/Ofício (Foto-grafia), História, Usar Bibliotecas, Ocultismo, Outra Lín-gua, Psicologia, uma outra perícia qualquer.
        </p>
        <p>
        Nível de Crédito: 9–30<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        PILOTO — Consertos Elétricos, Consertos Mecânicos, Navegação, Operar Maquinário Pesado, Piloto (aero-nave), Ciências (Astronomia), duas outras perícias.
        </p>
        <p>
        Nível de Crédito: 10–60<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        PROFESSOR  — Usar Bibliotecas, Outra Língua, Língua Nativa, Psicologia, outras quatro perícias como especialidades acadêmicas ou pessoais.
        </p>
        <p>
        Nível de Crédito: 30–90<br>
        Pontos de Perícias Ocupacionais: EDU × 4
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        PROFISSIONAL DE ENTRETENIMENTO — Arte/Ofício (Atuar), Disfarce, duas perícias interpessoais (Charme, Lábia, Intimidação ou Persuasão), Escutar, Psicologia, duas outras perícias.
        </p>
        <p>
        Nível de Crédito: 9-70<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + APA × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        <div>
        <p>
        SOLDADO — Escalar ou Natação, Esquivar, Lutar, Armas de Fogo, Furtividade, Sobrevivência e duas entre as seguintes: Primeiros Socorros, Consertos Mecânicos ou Outra Língua.
        </p>
        <p>
        Nível de Crédito: 10–40<br>
        Pontos de Perícias Ocupacionais: EDU × 2 + DES × 2 ou FOR × 2
        </p>
        <input type="radio" name="job_r" id="job_r">
            <hr>
        </div>
        </div>
        <div id="jM" value="Moderno" hidden>Moderno</div>
    </div>
    `
}
function mudanca() {
    let job = document.querySelector('select#jobs')
    let jLC = document.querySelector('div#jLC')
    let jM = document.querySelector('div#jM')
    let hide = document.querySelector('div#hide')
    hide.setAttribute('hidden', 'hidden')
    switch (job.value) {
        case 'LoveCraftiana':
            jLC.removeAttribute('hidden')
            jM.setAttribute('hidden', 'hidden')
            console.log(job.value)
            break
        case 'Moderno':
            jLC.setAttribute('hidden', 'hidden')
            jM.removeAttribute('hidden')
            console.log(job.value)
            break
    }
    
}

