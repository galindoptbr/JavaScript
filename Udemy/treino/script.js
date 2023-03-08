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
        fundo.style.backgroundColor = 'white';
    } else if (fundo.style.backgroundColor = 'orange') {

    }
}

function mudarTexto() {
    let botao = document.querySelector('#botaoMudarTexto');

    botao.innerText = 'VOCE CLICOU E O TEXTO MUDOU';
}