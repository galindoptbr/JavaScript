// function maior (n1, n2) {
//     if (n1 > n2) {
//         return n1;
//     } else {
//         return n2;
//     }   
// }

// let isMaior = maior(108, 7);

// console.log(isMaior);


// let maior = (x, y) => x > y ? x : y;
// console.log(maior(9, 6));

// function ePaisagem (x, y) {
//     if (x > y) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let tela = ePaisagem(4, 10);

// console.log(tela);


function FizzBuzz (n1) {
    if (typeof n1 !== 'number') return NaN;
    if (n1 % 3  === 0 && n1 % 5 === 0) return 'FizzBuzz';
    if (n1 % 3 === 0) return 'Fizz';
    if ( n1 % 5 === 0) return 'Buzz';
    return n1;
}

console.log(FizzBuzz(15));