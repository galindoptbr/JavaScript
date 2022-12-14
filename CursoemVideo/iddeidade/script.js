function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade >= 10 && idade < 21) {
                //Jovem
            } else if (idade >= 21 && idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade >= 10 && idade < 21) {
                //Jovem
            } else if (idade >= 21 && idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)       
    }
}
