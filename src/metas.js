const headerValue = document.getElementById("total-metas")
const headerTotal = document.getElementById('header-total')
const metasList = document.getElementById('metas-list')
const mainContainer = document.getElementById('main')

const state = JSON.parse(localStorage.getItem("local_list")) || []

const { nome, valorMensal, valorTotal, tempoemMeses } = state.metas

render = () => {
    metasList.innerHTML = ""

    for (nomes of nome) {
        const num = nome.indexOf(nomes)
        renderElement(nomes, `R$ ${valorMensal[num]}/Mês`, num)
    }

    setHeader()
    saveToStorage()
}

setHeader = () => {
    headerValue.innerHTML = ""
    headerTotal.innerHTML = ""

    let result = 0
    let resultT = 0

    for (valor of valorMensal) {
        result = result + valor
    }
    for (valor of valorTotal) {
        resultT = resultT + valor
    }

    headerValue.innerHTML = `R$ ${result}/Mês`
    headerTotal.innerHTML = `Total: R$ ${resultT}`
}

renderElement = (label, value, num) => {
    const liElement = document.createElement('li')
    const LabelElement = document.createElement('strong')
    const TextElement = document.createElement('p')

    const LabelText = document.createTextNode(label)
    const textText = document.createTextNode(value)

    LabelElement.appendChild(LabelText)
    TextElement.appendChild(textText)

    liElement.onclick = function () { seeAtribute(num) }

    liElement.appendChild(LabelElement)
    liElement.appendChild(TextElement)
    //liElement.setAttribute('onclick', `seeAtribute(${num})`)

    metasList.appendChild(liElement)
    saveToStorage()
}

document.getElementById('adicionar-button').onclick = () => {
    const nomeValor = window.prompt("Qual o nome da sua meta? (Obrigatório)")
    const total = window.prompt("Qual o valor total dessa meta? (R$ 100,00)")
    const tempo = window.prompt("Em quanto tempo pretende chegar nessa meta? (Meses)")
    const response = total / tempo
    const roundResponse = Math.round(response)

    if (nomeValor != "") {

        nome.push(nomeValor)
        tempoemMeses.push(tempo)
        valorMensal.push(roundResponse)
        valorTotal.push(roundResponse * tempo)
    }
    else{
        alert("Item não cadastrado")
    }

    saveToStorage()
    render()
}

seeAtribute = (pos) => {
    var r = window.confirm(`Meta: ${nome[pos]}\nValor Total: ${valorTotal[pos]}\nValor Mensal: ${valorMensal[pos]}\nTempo: ${tempoemMeses[pos]} Meses\n\n\nVocê deseja excluir essa meta?`)
    if (r == true) {
        deleteElement(pos)
    }
    else { }
    saveToStorage()
}

deleteElement = (pos) => {
    nome.splice(pos, 1)
    valorMensal.splice(pos, 1)
    valorTotal.splice(pos, 1)
    tempoemMeses.splice(pos, 1)

    saveToStorage()
    render()
}

saveToStorage = () => {
    localStorage.setItem('local_list', JSON.stringify(state))
}

render()