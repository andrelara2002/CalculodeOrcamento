const listResumo = document.getElementById("resumo-list")
const listMetas = document.getElementById("metas-list")
const listInvestimentos = document.getElementById("investimentos-list")
const listCustosF = document.getElementById('custosf-list')
const listCustosV = document.getElementById('custosv-list')

const state = {
    ganhos: 0,
    perdas: 0,
    expectativa: 0,
    lucroAtual: 0,
    previsaoFixa:0,
    previsaoVariavel:0,
    metas: {
        nome: [],
        valorTotal: [],
        valorMensal: [],
        ValorDario: [],
        tempoemMeses:[]
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
        nome :[],
        valorMensal: []
    }
    
}