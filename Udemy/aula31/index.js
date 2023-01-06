const verdadeira = true;

// Let tem escopo de bloco {..bloco}
// Var so tem escopo de funcao

let nome = 'Galindo';
var nome2 = 'Leite';

if (verdadeira) {
    let nome = 'Galindo';
    console.log(nome, nome2);8
}