setTimeout(() => {
  document.getElementById('boasVindas').textContent = '🌟 Bem-vindo à página!'
}, 3000)
setInterval(() => {
  const agora = new Date()
  const relogio = agora.toLocaleTimeString()
  document.getElementById('relogio').textContent = `🕒 Agora são: ${relogio}`
}, 1000)

const nomeSalvo = localStorage.getItem('nomeUsuario')
if (nomeSalvo) {
  document.getElementById('nomeSalvo').textContent = `👤 Olá novamente, ${nomeSalvo}`
}

document.getElementById('salvarBtn').addEventListener('click', () => {
  const nome = document.getElementById('nomeInput').value
  if (nome) {
    localStorage.setItem('nomeUsuario', nome)
    document.getElementById('nomeSalvo').textContent = `👤 Olá, ${nome}`
  }
})
