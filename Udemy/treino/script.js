const toggleButton = document.querySelector('.botao');

toggleButton.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'orange';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});