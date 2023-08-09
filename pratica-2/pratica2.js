let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')
let listaInformacoes = document.querySelector('#lista-informacoes')

const informacoes = []


function salvarInformacoes() {
    nomes.push(inputNome.value)
    idades.push(inputIdade.value)
    inputNome.value = ''
    inputIdade.value = ''

}

function visualizarInformacoes() {
    console.log(nomes)
    console.log(idades)
}
