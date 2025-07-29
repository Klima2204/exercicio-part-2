import { buscarDados } from './buscarDados.js';

function chamarComThen() {
  console.log("🔍 Buscando com .then/.catch...")
  buscarDados()
    .then((dados) => {
      console.log("⏱️ Dados chegaram:", dados)
    })
    .catch((erro) => {
      console.log("⚠️ Ocorreu um erro:", erro)
    })
}

async function chamarComAsync() {
  console.log("🔍 Buscando com async/await...")
  try {
    const dados = await buscarDados()
    console.log("⏱️ Dados chegaram:", dados)
  } catch (erro) {
    console.log("⚠️ Ocorreu um erro:", erro)
  }
}

document.getElementById("btnThen").addEventListener("click", chamarComThen)
document.getElementById("btnAsync").addEventListener("click", chamarComAsync)


