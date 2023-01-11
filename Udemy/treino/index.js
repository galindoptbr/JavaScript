function soma(a, b) {
    return a + b;
}

console.log(soma(10, 10));
console.log(soma(12, 3));
console.log(soma(5, 5));

 function maior(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
 }

 console.log(maior([1, 2, 3, 4, 5]));