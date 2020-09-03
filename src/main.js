/**
 * Definindo Elmentos de div para a adição de elementos
 */
const nomeElement = document.getElementById('nomeDiv');
const salarioElement = document.getElementById('salarioBase');
const custosElement = document.getElementById('divCustos');
const softwaresElement = document.getElementById('softwares')
//Definindo inputs para receber os dados
const nomeInput = document.getElementById('nomeInput')
const salarioInput = document.getElementById('salarioInput')
const custosInput = document.getElementById('custosInput')
const custosVariadosInput = document.getElementById('custosVariaveisInput')
const softwaresName = document.getElementById('softwareName')
const softwaresValues = document.getElementById('softwaresValues')
//Definindo Listas para adição de dados
const ulCustosELement = document.getElementById('listBoxCustos')
const ulCustosVariaveisElement = document.getElementById('ulCustosVariaveisElement')
const ulSoftwaresElement = document.getElementById('listBoxSoftwares')
//Definindo Botôes para interação
const createCustosVariaveis = document.getElementById('createCustosV')
const adicionarButton = document.getElementById('adicionar')
const createCustosButton = document.getElementById('createCustos')
const createSoftwaresButton = document.getElementById('criarSoftwares')

this.custos = [];
this.custosVariaveis = [];
this.info = {
    nome: [],
    salario: []
}
this.softwares = {
    nome: [],
    valor: []
}

function createCustosList() {
    if (custosInput.value == null || custosInput.value == "" || custosInput.value == "null") {
        alert("por favor insira algo")
    }
    else {
        this.custos.push(custosInput.value)
        custosInput.value = ""
        ulCustosELement.innerHTML = ""


        for (let custo of this.custos) {
            const liElement = document.createElement('li')
            const text = document.createTextNode(`R$ ${custo}`)
            const pos = custos.indexOf(custo)

            liElement.appendChild(text)
            liElement.setAttribute("onclick", `deleteElement(${pos})`)
            ulCustosELement.appendChild(liElement)

            ulCustosELement.hidden = false
        }
        this.custos = custos;
    }
}

function createCustosVariaveisList() {
    if (custosVariadosInput.value == "") {
        alert("Por favor insira um custo que pode se alterar por mês")
    }
    else {
        this.custosVariaveis.push(custosVariadosInput.value)
        ulCustosVariaveisElement.innerHTML = "";

        for (let custo of this.custosVariaveis) {
            const liElement = document.createElement('li');
            const text = document.createTextNode(`R$ ${custo}`)

            liElement.appendChild(text)
            ulCustosVariaveisElement.appendChild(liElement)
        }
        ulCustosVariaveisElement.hidden = false;
        custosVariadosInput.value = ""
    }
}

function createSoftwaresList() {
    const { nome, valor } = this.softwares
    if (softwaresName.value === null || softwaresName.value == "" || softwaresName.value == "null") {
        alert('Por favor insira o nome do software')
    }
    else {
        valor.push(softwaresValues.value)
        nome.push(softwaresName.value)
        softwaresName.value = null;
        softwaresValues.value = null;
        ulSoftwaresElement.innerHTML = ""
    }
    for (let custo of nome) {
        console.log(nome)
        const num = nome.indexOf(custo)
        const liElement = document.createElement('li')
        const name = document.createTextNode(`${custo}: R$ ${valor[num]}`)

        liElement.appendChild(name)
        ulSoftwaresElement.appendChild(liElement)
        ulSoftwaresElement.hidden = false
    }
}

function Adicionar() {
    if (nomeInput.value === "" || salarioInput.value === "") {
        alert("Insira seus dados base por favor")
    }
    else {
        let custosTotais = 0
        this.info.nome = nomeInput.value;
        this.info.valor = salarioInput.value;

        for (let custo of this.custos) {
            custosTotais = parseFloat(custo) + custosTotais;
        }
        for (let custo of this.softwares.valor) {
            custosTotais = parseFloat(custo) + custosTotais;
        }
        for (let custo of this.custosVariaveis){
            custosTotais = parseFloat(custo) + custosTotais;
        }
        custosTotais = parseFloat(this.info.valor) + custosTotais;
        custosTotais = custosTotais + custosTotais * 0.3
        console.log((custosTotais/30)/24)
        console.log(custosTotais)
    }
}

createCustosButton.onclick = function () {
    createCustosList();
}
createSoftwaresButton.onclick = function () {
    createSoftwaresList();
}
createCustosVariaveis.onclick = function () {
    createCustosVariaveisList();
}

adicionarButton.onclick = function () {
    Adicionar()
}
