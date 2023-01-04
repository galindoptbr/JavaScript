const data = new Date();
const diaSemana = data.getDay();
const hora = data.getHours();
const fullYear = data.getFullYear();
let dayText;
let textDate = document.querySelector('.data');

if (diaSemana === 0) {
    dayText = 'Domingo';
} else if (diaSemana === 1) {
    dayText = 'Segunda-Feira'
} else if (diaSemana === 2) {
    dayText = 'Terca-Feira'; 
} else if (diaSemana === 3) {
    dayText = 'Quarta-Feira';
} else if (diaSemana === 4) {
    dayText = 'Quinta-Feira';
} else if (diaSemana === 5) {
    dayText = 'Sexta-Feira';
} else if (diaSemana === 6) {
    dayText = 'Sabado';
} else {
    dayText = ''
}
 
textDate.innerHTML = `${dayText}, `
console.log(dayText, fullYear, hora);