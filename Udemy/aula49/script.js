function falaOi () {
    console.log('ola, mundo!');
}

falaOi();

function soma(n1, n2) {
    let somar = n1 + n2;
    console.log(somar);

}

soma(5, 4);

function ePar(n1) {
    if (n1 % 2 === 0) {
        console.log(`${n1} e PAR.`);
    } else {
        console.log(`${n1} e IMPAR.`)
    }
}

ePar(4);

function maior(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(`${n1} e maior que ${n2} e ${n3}.`);
    } else if (n2 > n1 && n2 > n3) {
        console.log(`${n2} e maior que ${n1} e ${n3}`);
   } else {
        console.log(`${n3} e maior que ${n1} e ${n2}`);
   }
}

maior(3, 39, 50);