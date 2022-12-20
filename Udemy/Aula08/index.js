/* Luiz Otávio Miranda tem 30 anos, pesa 84 Kg, 
tem 1.8  de altura e seu IMC é 25.9879767
Luiz Otávio nasceu em 1992.
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${altura} de altura e seu IMC é ${imc}.`)
console.log(`${nome} nasceu em ${anoNascimento}.`)

