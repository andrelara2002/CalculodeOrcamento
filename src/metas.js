const headerValue = document.getElementById("total-metas")
const metasList = document.getElementById('metas-list')

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

render()