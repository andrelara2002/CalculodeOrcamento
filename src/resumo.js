const listResumo = document.getElementById("resumo-list")
const listMetas = document.getElementById("metas-list")
const listInvestimentos = document.getElementById("investimentos-list")
const listCustosF = document.getElementById('custosf-list')
const listCustosV = document.getElementById('custosv-list')

const state = {
    ganhos: 1000.00,
    perdas: 900.00,
    expectativa: "--",
    lucroAtual: 0,
    previsaoFixa: 0,
    previsaoVariavel: 0,
    metas: {
        nome: ["Photoshop", "PC novo", "Illustrator"],
        valorTotal: [],
        valorMensal: [200, 300, 5000],
        ValorDario: [],
        tempoemMeses: []
    },
    investimentos: {
        nome: [],
        valorTotal: [],
        valorMensal: [],
        valorDiario: [],
        tempoemMeses: []
    },
    custosFixos: {
        nome: [],
        valorMensal: []
    },
    custosVariaveis: {
        nome: [],
        valorMensal: []
    }

}

render = function () {
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
    renderResumo("Previsão Fixa",`R$ ${state.previsaoVariavel}`, "none")
    getIdColor("ganhos")
    getIdColor("gastos")

    for (let states of state.metas.nome){
        const num = state.metas.nome.indexOf(states)
        renderMetas(states, `R$ ${state.metas.valorMensal[num]}`)
    }

    for (let states of state.investimentos.nome){
        const num = state.investimentos.nome.indexOf(states)
        renderInvestimentos(states, `R$ ${state.investimentos.valorMensal[num]}`)
    }

    for (let states of state.custosFixos.nome){
        const num = state.custosFixos.nome.indexOf(states)
        renderCustosFixos(states, `R$ ${state.custosFixos.valorMensal[num]}`)
    }

    for (let states of state.custosVariaveis.nome){
        const num = state.custosVariaveis.nome.indexOf(states)
        renderCustosVariaveis(states, `R$ ${state.custosVariaveis.valorMensal[num]}`)
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

saveToStorage = () =>{
    localStorage.setItem('local_list', JSON.stringify(state))
}

document.getElementById('metas-list').onclick = () => {
    window.location.href = "../public/pages/metas.html"
}

render();