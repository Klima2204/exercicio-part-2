const numeroSecreto = Math.floor(Math.random() * 10) + 1
let tentativa = 0
let chute

do {
    tentativa++
    chute = Math.floor(Math.random() * 10) + 1
    console.log(`Tentativa ${tentativa}: ${chute}`)
} while (chute !== numeroSecreto)

console.log(`Número secreto: ${numeroSecreto}`)
console.log(`Acertou em ${tentativa} tentativas`)