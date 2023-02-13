function media(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    let media = soma / 2
    console.log(media);
}

media(4, 5, 8);

function parOuImpar(n1) {
    if (n1 % 2 === 0) {
        console.log(`${n1} E PAR.`);
    } else {
        console.log(`${n1} E IMPAR.`)
    }
}

parOuImpar(30);

function contadorDeVogais(str) {
    let vogais = 'aeiouAEIOU';
    let cont = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.indexOf(str[i]) !== -1) {
            cont++;
        }
    }
    return cont;
}

let resultado = contadorDeVogais('Carapicuiba');
console.log(resultado);

