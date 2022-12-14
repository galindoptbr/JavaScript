var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`Agora são ${hora} da manhã. Bom dia.`) 
} else if (hora >= 12 && hora < 18) {
    console.log (`Agora são ${hora} da tarde. Boa tarde.`)
} else if (hora >= 18) {
    console.log (`Agora são ${hora} da noite. Boa noite.`)
}