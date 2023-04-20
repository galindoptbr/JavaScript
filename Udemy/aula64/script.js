function preco(){

    let largura = document.querySelector('#largura');
    let comprimento = document.querySelector('#comprimento');
    let metroQ = document.querySelector('#metroq');
    let calcular = document.querySelector('.calcular');

    let  area = document.querySelector('.area');
    let preco = document.querySelector('.preco');

    let resultArea = '';
    let resultPreco = '';

    calcular.addEventListener('click', function() {
        resultArea = largura.value * comprimento.value;
        resultPreco = resultArea * metroQ.value;
        area.innerHTML = `Seu terreno possui ${resultArea} metros quadrados.`;
        preco.innerHTML = `Este terreno custa R$ ${resultPreco}.`;
    });

};

preco();