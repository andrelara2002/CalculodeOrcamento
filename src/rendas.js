const headerValue = document.getElementById("total-metas")
const metasList = document.getElementById('metas-list')
const mainContainer = document.getElementById('main')

const state = JSON.parse(localStorage.getItem("Orc_local_list")) || []

const {nome, valorMensal} = state.rendas

render = () => {
    if (nome == []){
        renderElement("---", null, null)
    }
    console.log(valorMensal)
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

    let result = 0

    for (valor of valorMensal) {
        result += valor
    }

    headerValue.innerHTML = `R$ ${result}/Mês`
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
    const nomeValor = window.prompt("Qual o nome do seu custo? (Obrigatório)")
    let total = window.prompt("Quanto você gasta por mês? (R$ 100,00)")
    total = parseFloat(total)

    if (nomeValor != null || nomeValor != "") {

        nome.push(nomeValor)
        valorMensal.push(total)
    }
    else{
        alert("Item não cadastrado")
    }

    saveToStorage()
    render()
}

seeAtribute = (pos) => {
    var r = window.confirm(`Meta: ${nome[pos]}\nValor Mensal: ${valorMensal[pos]}\n\n\nVocê deseja excluir essa meta?`)
    if (r == true) {
        deleteElement(pos)
    }
    else { }
    saveToStorage()
}

deleteElement = (pos) => {
    nome.splice(pos, 1)
    valorMensal.splice(pos, 1)

    saveToStorage()
    render()
}

saveToStorage = () => {
    localStorage.setItem('Orc_local_list', JSON.stringify(state))
}

render()