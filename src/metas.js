const headerValue = document.getElementById("total-metas")
const metasList = document.getElementById('metas-list')
const mainContainer = document.getElementById('main')

const state = JSON.parse(localStorage.getItem("local_list"))  || []

const {nome, valorMensal, valorTotal, tempoemMeses} = state.metas

render = () =>{
    metasList.innerHTML = ""

    for (nomes of nome){
        const num = nome.indexOf(nomes)
        renderElement(nomes,`R$ ${valorMensal[num]}/Mês`)
    }
}

renderElement = (label, value) => {
    const liElement = document.createElement('li')
    const LabelElement = document.createElement('strong')
    const TextElement = document.createElement('p')

    const LabelText = document.createTextNode(label)
    const textText = document.createTextNode(value)

    LabelElement.appendChild(LabelText)
    TextElement.appendChild(textText)

    liElement.appendChild(LabelElement)
    liElement.appendChild(TextElement)

    metasList.appendChild(liElement)
}

document.getElementById('adicionar-button').onclick = () =>{
    const nomeValor = window.prompt("Qual o nome da sua meta?")
    const total = window.prompt("Qual o valor total dessa meta? (R$ 100,00)")
    const tempo = window.prompt("Em quanto tempo pretende chegar nessa meta?")
    const response = valorTotal/tempoemMeses
    const roundResponse = Math.round(response)

    nome.push(nomeValor)
    valorTotal.push(total)
    tempoemMeses.push(tempo)
    valorMensal.push(roundResponse)

    render()
}

seeAtribute = (pos) =>{
    window.alert(`Meta: `)
}

deleteElement = (pos) =>{
    nome.splice(pos,1)
    valorMensal.splice(pos,1)
    valorTotal.splice(pos,1)
    tempoemMeses.splice(pos,1)

    render()
}
render()