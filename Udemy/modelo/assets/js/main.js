function imc() {

    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    

    if (peso.value.length == 0) {
        alert(`[ERRO] verifique os dados.`)
    } else {
        let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))
        let arred = parseFloat(imc.toFixed(2))
        let resultado = ''
        if (imc <= 18.5) {
            resultado = 'abaixo do peso'
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado = 'com o peso normal'
        }  else if (imc > 24.9 && imc <= 29.9) {
            resultado = 'com sobrepeso'
        } else if (imc > 29.9 && imc <= 34.9) {
            resultado = 'em Obesidade grau 1'
        } else if (imc > 34.9 && imc <= 39.9) {
            resultado = 'em Obesidade grau 2'
        } else if (imc > 39.9) {
            resultado = 'em Obesidade grau 3'
        }
        res.innerHTML = `Seu IMC e ${arred} voce esta ${resultado}.`     

    }
}