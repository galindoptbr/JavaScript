function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Agora são ${hora} horas da manhã 🌞`
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(21, 144, 226)'
    } else if (hora > 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML = `Agora são ${hora} horas da tarde ☀️`
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(254, 90, 41)'

    } else {
        //BOA NOITE!
        msg.innerHTML = `Agora são ${hora} horas da noite 🌙`
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(5, 21, 45)'

    }

}

