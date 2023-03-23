let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        impares.push(numeros[i]);
    }
}

console.log(impares);

// let frutas = ['pera', 'uva', 'banana', 'abacaxi'];
// frutas.push('manga', 'abacate', 'morango');

// console.log(frutas);

let animais = ['macaco', 'cao', 'gato', 'leao'];
animais.pop();

console.log(animais);

let num = [1, 2, 3, 4, 5,];
let multiplicados = [];

for (let i = 0; i < num.length; i++) {
    multiplicados.push(num[i] * 2);
}

console.log(multiplicados);

let livros = [
    {titulo: 'Harry Potter', autor: 'J.K Rowling', ano: 1997},
    {titulo: 'O Senhor dos Aneis', autor: 'J.R.R. Tolkien', ano: 1954},
    {titulo: 'A Cabana', autor: 'William P. Young', ano: 2007}
];

function obterTitulos(array) {
    let titulos = [];

    for (let i = 0; i < array.length; i ++) {
        titulos.push(array[i].titulo);
    }

    return titulos;
}

console.log(obterTitulos(livros));