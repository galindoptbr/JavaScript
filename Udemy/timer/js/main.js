function relogio (){

    function getTimeFromSeconds (segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    let relogio = document.querySelector('.relogio');
    let iniciar = document.querySelector('.iniciar');
    let pausar = document.querySelector('.pausar');
    let zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    iniciar.addEventListener('click', function(event) {
        iniciar.innerHTML = 'INICIAR';
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(event) {
        iniciar.innerHTML = 'RETOMAR';
        relogio.classList.add('pausado');
        clearInterval(timer);
    });

    zerar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        iniciar.innerHTML = 'INICIAR';
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });

}

relogio();