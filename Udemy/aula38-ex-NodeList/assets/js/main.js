const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bcb = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = bcb;
    p.style.color = 'white';
}