const elementos = [
    {tag: 'p', texto: 'Qualquer texto.'},
    {tag: 'div', texto: 'Frase 2.'},
    {tag: 'section', texto: 'Frase 3.'},
    {tag: 'footer', texto: 'Frase 4.'},
];

const containner = document.querySelector('.containner');
const div = document.createElement('div'); // AQUI

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

containner.appendChild(div);