const listResumo = document.getElementById("resumo-list")
const listMetas = document.getElementById("metas-list")
const listInvestimentos = document.getElementById("investimentos-list")
const listCustosF = document.getElementById('custosf-list')
const listCustosV = document.getElementById('custosv-list')
const listRendas = document.getElementById('rendas-list')
const userName = document.getElementById('user-name')
const valorHora = document.getElementById('valor-hora')

const state = JSON.parse(localStorage.getItem("Orc_local_list")) || {
    perfil:{
        nome:"Usuário",
        valorPorHora:0
    },
    ganhos: 0,
    perdas: 0,
    expectativa: 0,
    lucroAtual: 0,
    previsaoFixa: 0,
    previsaoVariavel: 0,
    metas: {
        nome: [],
        valorTotal: [],
        valorMensal: [],
        ValorDario: [],
        tempoemMeses: []
    },
    investimentos: {
        nome: [],
        valorTotal: [],
        valorMensal: [],
        ValorDario: [],
        tempoemMeses: []
    },
    custosFixos: {
        nome: [],
        valorMensal: [],
    },
    custosVariaveis: {
        nome: [],
        valorMensal: [],
    },
    rendas: {
        nome: [],
        valorMensal: []
    }
}

render = function () {

    userName.innerHTML = state.perfil.nome
    valorHora.innerHTML = `R$ ${Math.round(state.ganhos/(30*24))}/hora`
    
    state.perdas = 0
    this.perdaVariavel = 0
    for (let sate of state.metas.valorMensal){
        state.perdas += sate
    }
    for (let sate of state.investimentos.valorMensal){
        state.perdas += sate
    }
    for (let sate of state.custosVariaveis.valorMensal){
        state.perdas += sate
    }
    for (let sate of state.custosVariaveis.valorMensal){
        this.perdaVariavel += sate
    }
    this.perdaVariavel += state.perdas

    state.ganhos = 0
    for (let sate of state.rendas.valorMensal){
        state.ganhos += sate
    }

    calcPrevisaoFixa()
    calcPrevisaoVariavel()
    calcLucroAtual()

    listInvestimentos.innerHTML = ""
    listResumo.innerHTML = ""
    listMetas.innerHTML = ""
    listCustosF.innerHTML = ""
    listCustosV.innerHTML = ""
    renderResumo("Meus ganhos",`R$ ${state.ganhos}`, "ganhos")
    renderResumo("Meus gastos",`R$ ${state.perdas}`, "gastos")
    calcExpectativa()
    renderResumo("Expectativa", state.expectativa, "none")
    renderResumo("Lucro Atual", `%${state.lucroAtual}`, "none")
    renderResumo("Previsão Fixa",`R$ ${state.previsaoFixa}`, "none")
    renderResumo("Previsão Variável",`R$ ${state.previsaoVariavel}`, "none")
    getIdColor("ganhos")
    getIdColor("gastos")

    for (let states of state.metas.nome){
        const num = state.metas.nome.indexOf(states)
        renderMetas(states, `R$ ${state.metas.valorMensal[num]} /Mês`)
    }

    for (let states of state.investimentos.nome){
        const num = state.investimentos.nome.indexOf(states)
        renderInvestimentos(states, `R$ ${state.investimentos.valorMensal[num]} /Mês`)
    }

    for (let states of state.custosFixos.nome){
        const num = state.custosFixos.nome.indexOf(states)
        renderCustosFixos(states, `R$ ${state.custosFixos.valorMensal[num]}`)
    }

    for (let states of state.custosVariaveis.nome){
        const num = state.custosVariaveis.nome.indexOf(states)
        renderCustosVariaveis(states, `R$ ${state.custosVariaveis.valorMensal[num]}`)
    }

    for (let states of state.rendas.nome){
        const num = state.rendas.nome.indexOf(states)
        renderRendasMensais(states, `R$ ${state.rendas.valorMensal[num]}`)
    }

    saveToStorage()
}

renderResumo = (label, valor, id) => {
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listResumo.appendChild(listElement)
}

renderMetas = (label, valor, id) =>{
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listMetas.appendChild(listElement)
}

renderInvestimentos = (label, valor, id) =>{
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listInvestimentos.appendChild(listElement)
}
renderCustosFixos = (label, valor, id) =>{
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listCustosF.appendChild(listElement)
}

renderCustosVariaveis = (label, valor, id) =>{
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listCustosV.appendChild(listElement)
}

renderRendasMensais = (label, valor, id) =>{
    const listElement = document.createElement('li')
    const labelElement = document.createElement('strong')
    const labelText = document.createTextNode(label)
    const valorElement = document.createElement('p')
    const valorText = document.createTextNode(valor)
    labelElement.setAttribute("id", id)
    labelElement.style.lineHeight = "0"

    labelElement.appendChild(labelText)
    valorElement.appendChild(valorText)

    labelElement.appendChild(valorElement)
    listElement.appendChild(labelElement)

    listRendas.appendChild(listElement)
}

getIdColor = (id) => {
    const strongElement = document.getElementById(id)

    if (id === "ganhos") {
        strongElement.style.fontWeight = "900"
        strongElement.style.color = "lightgreen"
    }
    else {
        strongElement.style.fontWeight = "900"
        strongElement.style.color = "red"
    }
}

calcExpectativa = () =>{
    const result = state.ganhos - state.perdas
    if (state.ganhos > state.perdas){
        state.expectativa = "Dentro do esperado"
    }
    else {
        state.expectativa = "Débito negativo"
    }
}

calcPrevisaoFixa = () =>{
    const result = state.ganhos - state.perdas
    state.previsaoFixa = result
}

calcPrevisaoVariavel = () => {
    const result = state.ganhos - this.perdaVariavel
    state.previsaoVariavel = result
}

calcLucroAtual = () => {
    let lucro = state.ganhos - state.perdas
    lucro = lucro/(state.ganhos/100)
    state.lucroAtual = Math.round(lucro)
}

document.getElementById('profile-card').onclick = () =>{
    if (confirm(`Olá, seu nome é ${state.perfil.nome} Gostaria de alterar?`)){
        const newName = prompt('Diga seu novo nome')
        if (newName !== ""){
            state.perfil.nome = newName
            alert('Cadastrado com sucesso')
        }
        else{
            alert('Erro de cadastro')
        }
    }
    else{}
    render()
}

saveToStorage = () =>{
    localStorage.setItem('Orc_local_list', JSON.stringify(state))
}


render();