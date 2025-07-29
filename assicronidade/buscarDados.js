export function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // altere para false para testar erro
      if (sucesso) {
        resolve("📦 Dados recebidos com sucesso!");
      } else {
        reject("❌ Erro ao buscar os dados.");
      }
    }, 2000);
  });
}

