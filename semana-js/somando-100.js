let soma = 0;
let contador = 0;

while (soma < 100) {
    const numero = Math.floor(Math.random() * 10) + 1;
    soma += numero;
    contador++;
}

console.log(`Soma final: ${soma}`);
console.log(`Números somados: ${contador}`);