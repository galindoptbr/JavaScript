/*
&& -> Todas as expressoes precisam ser verdadeiras
|| -> 

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

