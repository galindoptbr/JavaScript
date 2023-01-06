// const data = new Date();
// const diaSemana = data.getDay();
// const nomeMes = data.getMonth();
// const hora = data.getHours();
// const minutos = zeroEsquerda(data.getMinutes());
// const fullYear = data.getFullYear();
// let textDate = document.querySelector('.data');
// let dayText;
// let mesText;

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// if (nomeMes === 0) {
//     mesText = 'Janeiro';
// } else if (nomeMes === 1) {
//     mesText = 'Fevereiro'
// } else if (nomeMes === 2) {
//     mesText = 'Marco'; 
// } else if (nomeMes === 3) {
//     mesText = 'Abril';
// } else if (nomeMes === 4) {
//     mesText = 'Maio';
// } else if (nomeMes === 5) {
//     mesText = 'Junho';
// } else if (nomeMes === 6) {
//     mesText = 'Julho';
// } else if (nomeMes === 7) {
//     mesText = 'Agosto'; 
// } else if (nomeMes === 8) {
//     mesText = 'Setembro';
// } else if (nomeMes === 9) {
//     mesText = 'Outubro';
// } else if (nomeMes === 10) {
//     mesText = 'Novembro';
// } else if (nomeMes === 11) {
//     mesText = 'dezembro';
// } else {
//     mesText = '';
// }

    
// if (diaSemana === 0) {
//     dayText = 'Domingo';
// } else if (diaSemana === 1) {
//     dayText = 'Segunda-Feira'
// } else if (diaSemana === 2) {
//     dayText = 'Terca-Feira'; 
// } else if (diaSemana === 3) {
//     dayText = 'Quarta-Feira';
// } else if (diaSemana === 4) {
//     dayText = 'Quinta-Feira';
// } else if (diaSemana === 5) {
//     dayText = 'Sexta-Feira';
// } else if (diaSemana === 6) {
//     dayText = 'Sabado';
// } else {
//     dayText = ''
// }


 
// textDate.innerHTML = `${dayText}, ${data.getDate()} de ${mesText} de ${fullYear}, ${hora}:${minutos} `

const h1 = document.querySelector('.data h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
