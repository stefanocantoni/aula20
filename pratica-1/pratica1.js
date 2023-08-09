let titulo = document.querySelector('.titulo-principal');
let inputNome = document.querySelector('#nome')

console.log(titulo.innerHTML)

const nomes = ['Samira', 'Gabriel', 'Rodrigo', 'Stefano']

function clicou() {
    let nomeDigitado = inputNome.value

    nomes.push(nomeDigitado)
    inputNome.value = ''
}

function visualizarNomes() {
    console.log (nomes)
}

