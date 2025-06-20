let vitoriasJogador = 0;
let vitoriasComputador = 0;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'par' : 'ímpar';
}

function jogar() {
    const valorInput = document.getElementById('numeroUsuario').value;
    const numeroJogador = parseInt(valorInput, 10);

    if (isNaN(numeroJogador) || numeroJogador < 1 || numeroJogador > 10) {
        alert('Por favor, digite um número válido entre 1 e 10.');
        return;
    }

    const numeroComputador = gerarNumeroAleatorio();
    const soma = numeroJogador + numeroComputador;
    const resultado = parOuImpar(soma);
    const escolhaJogador = 'par';

    let mensagem = `Você escolheu: ${numeroJogador}<br>
                Computador escolheu: ${numeroComputador}<br>
                Soma: ${soma} (${resultado})<br>`;

    if (resultado === escolhaJogador) {
        vitoriasJogador++;
        mensagem += '<strong>Você venceu!</strong>';
    } else {
        vitoriasComputador++;
        mensagem += '<strong>Computador venceu!</strong>';
    }

    document.getElementById('resultado').innerHTML = mensagem;
    document.getElementById('placarJogador').textContent = vitoriasJogador;
    document.getElementById('placarComputador').textContent = vitoriasComputador;
}

function resetarJogo() {
    vitoriasJogador = 0;
    vitoriasComputador = 0;
    document.getElementById('placarJogador').textContent = 0;
    document.getElementById('placarComputador').textContent = 0;
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('numeroUsuario').value = '';
}