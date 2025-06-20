const semaforo = document.getElementById('semaforo');
const mensagem = document.getElementById('mensagem');

document.getElementById('vermelho').addEventListener('click', function () {
    semaforo.style.backgroundColor = 'red';
    mensagem.textContent = 'Pare';
});

document.getElementById('amarelo').addEventListener('click', function () {
    semaforo.style.backgroundColor = 'yellow';
    mensagem.textContent = 'Atenção';
});

document.getElementById('verde').addEventListener('click', function () {
    semaforo.style.backgroundColor = 'green';
    mensagem.textContent = 'Siga';
});
document.getElementById('submit').addEventListener('click', function () {
    semaforo.style.backgroundColor = 'white';
    mensagem.textContent = 'Reiniciado';
});