let amigo = {nome: 'josé', sexo: 'M', peso: '74', engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(4)
console.log(amigo)