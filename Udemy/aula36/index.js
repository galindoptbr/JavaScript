// For in -> Le os indices ou chaves do objeto
//
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}