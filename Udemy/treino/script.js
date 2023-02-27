function soma(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

soma(9, 3);

function quadrado(num) {
    let quad = num * num;
    console.log(quad);
}

quadrado(3);

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
        
    } else {
        return num * fatorial(num - 1);
        
    }
}

console.log(fatorial(5));

function par(num) {
    if (num % 2 === 0) {
        return 'PAR';
    } else {
        return 'IMPAR';
    }
}

console.log(par(26));



