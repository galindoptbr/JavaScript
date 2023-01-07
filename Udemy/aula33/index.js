const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
    rua: 'Av Brasil',
    numero: 230
    }
};


// atribuicao via desestruturacao
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome);