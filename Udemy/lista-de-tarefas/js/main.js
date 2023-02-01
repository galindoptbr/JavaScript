let tarefa = document.querySelector('.tarefa');
let adicionar = document.querySelector('.adicionar');
let tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

tarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!tarefa.value) return;
        criaTarefa(tarefa.value);
    }
});

function limpaInput() {
    tarefa.value = '';
    tarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar' );
    botaoApagar.setAttribute('title', 'apagar esta tarefa' );
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

adicionar.addEventListener('click', function() {
    if (!tarefa.value) return;
    criaTarefa(tarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDetarefas = [];

    for (let afazer of liTarefas) {
        let tarefa = tarefas.innerText;
        tarefa = tarefa.replace('apagar', '');
    }
}