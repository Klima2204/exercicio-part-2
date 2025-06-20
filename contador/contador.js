document.getElementById('aumentar').addEventListener('click', function () {
    const contador = document.getElementById('contador');
    let valorAtual = parseInt(contador.textContent);
    valorAtual + 1;
    contador.textContent = valorAtual + 1;
});
document.getElementById('diminuir').addEventListener('click', function () {
    const contador = document.getElementById('contador');
    let valorAtual = parseInt(contador.textContent);
    if (valorAtual > 0) {
        contador.textContent = valorAtual - 1;
    }
});
document.getElementById('resetar').addEventListener('click', function () {
    const contador = document.getElementById('contador');
    contador.textContent = '0';
});
document.getElementById('contador').textContent = '0';