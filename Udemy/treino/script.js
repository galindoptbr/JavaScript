function addElement() {
    // Cria o paragrafo
    let newElement = document.createElement('p');
    // Cria o texto
    let text = document.createTextNode('Este e um novo elemento');
    // Adiciona o texto como filho ao paragrafo
    newElement.appendChild(text);
    // Adiciona o paragrafo como filho ao body
    document.body.appendChild(newElement);
}

// Chama a funcao
addElement()

function addClass(elementId, classDoTitulo) {
    let element = document.getElementById(elementId);
    element.classList.add(classDoTitulo);
}

addClass('elementId', 'classDoTitulo');

function changeBackgroundColor() {
    let fundo = document.querySelector('body');

    if (fundo.style.backgroundColor === 'orange') {
        fundo.style.backgroundColor = '#262626';
    } else if (fundo.style.backgroundColor = 'orange') {

    }
}

function mudarTexto() {
    let botao = document.querySelector('#botaoMudarTexto');

    botao.innerText = 'VOCE CLICOU E O TEXTO MUDOU';
}

function exibirAlerta() {
    alert('Este botao gera um alerta!')
}

let alerta = document.querySelector('#alerta');
alerta.addEventListener('click', exibirAlerta);

let minhsLista = document.querySelector('#minhaLista');
let meuBotao = document.querySelector('#meuBotao');

meuBotao.addEventListener('click', () => {
    let novoItem = document.createElement('li');
    novoItem.textContent = document.querySelector('#novoItem').value;
    minhsLista.appendChild(novoItem);
    document.querySelector('#novoItem').value = '';
    document.querySelector('#novoItem').focus();
});

let listaNomes = document.querySelector('#listaNomes');
let botaoNomes = document.querySelector('#botaoNome');

botaoNomes.addEventListener('click', () => {
    let novoNome = document.createElement('li');
    novoNome.textContent = document.querySelector('#novoNome').value;
    listaNomes.appendChild(novoNome);
    document.querySelector('#novoNome').value = '';
    document.querySelector('#novoNome').focus();
});