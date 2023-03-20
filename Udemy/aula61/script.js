let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [...a1, ...a2, 'Galindo', ...[7, 8, 9]];
console.log(a3);

// filter, map, reduce


  //Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numFilters = numeros.filter(function(valor) {
    return valor > 10;
});

console.log(numFilters);

const num = [10, 4, 44, 3, 2, 1, 55, 63, 32, 27];

const filtrados = num.filter(valor => valor < 32);

console.log(filtrados);


//Retorno os nomes que contem 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne os nomes cujo nome termina com a
const pessoas = [
    {nome: 'Pedro', idade: 64},
    {nome: 'Maria', idade: 72},
    {nome: 'Jose', idade: 20},
    {nome: 'Ramom', idade: 7},
    {nome: 'Luzia', idade: 51},
];
const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomesGrandes);

const mais50 = pessoas.filter(obj => obj.idade > 50);
console.log(mais50); 

const termA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(termA);