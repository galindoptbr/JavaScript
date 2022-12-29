const numero = Number(prompt('Digite um numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 2} </p>`
texto.innerHTML += `<p> ${numero} e inteiro: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p> E NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p> Arredondado para baixo: ${Math.trunc(numero)}</p>`
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} <p/>`
