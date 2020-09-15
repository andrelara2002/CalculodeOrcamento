const listResumo = document.getElementById("resumo-list")
const listMetas = document.getElementById("metas-list")
const listInvestimentos = document.getElementById("investimentos-list")
const listCustosF = document.getElementById('custosf-list')
const listCustosV = document.getElementById('custosv-list')

const state = {
    ganhos: 1000,
    perdas: 900,
    expectativa: "--",
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
    listResumo.innerHTML = ""
    renderResumo("Meus ganhos", state.ganhos, "ganhos")
    renderResumo("Meus gastos", state.perdas, "gastos")
    calcExpectativa()
    renderResumo("Expectativa", state.expectativa, "none")
    getIdColor("ganhos")
    getIdColor("gastos")
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

render();