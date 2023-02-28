function soma(n1, n2) {
   return n1 + n2;
}

console.log(soma(4, 5));

function ehPar(num) {
   if (num % 2 === 0) {
      return 'PAR';
   } else {
      return 'IMPAR';
   }
}

console.log(ehPar(11));

function fatorial(num) {
   if (num === 0 || num === 1) {
      return 1;
   } else {
      return num * fatorial(num -1);
   }
   
}

console.log(fatorial(5));

function invertido(str) {
   return str.split('').reverse('').join('');
}

console.log(invertido('assado'));

function ehPalindromo(str) {
   const inverteStr = str.split('').reverse('').join('');
   return inverteStr === str;
}

console.log(ehPalindromo('parado'));

function calculaMedia(num) {
   const soma = num.reduce((total, numero) => total + numero, 0);
   return soma / num.length;
}

console.log(calculaMedia([20, 10, 30, 40]));

function ehPrimo(num) {
   if (num < 2) {
      return false;
   }

   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }

   return true;
}

console.log(ehPrimo(4));

function filtraImpares(num) {
   return num.filter(num => num % 2 !== 0);
}

console.log(filtraImpares([1, 4, 5, 7, 8, 11, 12, 33]));