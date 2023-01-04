const data = new Date('1991-01-02 7:45');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terca-Feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
} else {
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);