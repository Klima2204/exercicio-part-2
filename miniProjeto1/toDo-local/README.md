# 📋 ToDo Local

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Feito com](https://img.shields.io/badge/feito%20com-JavaScript%20Vanilla-green)

Gerenciador de tarefas simples e funcional feito com HTML, CSS e JavaScript.  
Salva suas tarefas diretamente no navegador usando `localStorage`, garantindo persistência sem backend.

---

## 🚀 Funcionalidades

- ✅ Adicionar tarefas
- 🗑️ Remover tarefas
- 🔁 Atualização automática da lista
- 💾 Armazenamento local persistente
- 📱 Interface responsiva

---

## 📂 Estrutura do projeto

miniProjeto1/toDo-local/ │ ├── index.html # Página principal ├── style.css # Estilização da interface ├── script.js # Lógica da aplicação └── README.md # Documentação do projeto


---

## ▶️ Como rodar

1. Clone o repositório:
```bash
git clone https://github.com/Klima2204/exercicio-part-2.git
Acesse a pasta do projeto:

bash
cd exercicio-part-2/miniProjeto1/toDo-local
Abra o index.html no navegador!

🧠 Como funciona
Toda tarefa é armazenada como texto no localStorage. Ao adicionar ou excluir uma tarefa, o script:

Usa JSON.parse() para recuperar o array de tarefas salvas

Modifica o array conforme necessário (adicionar ou remover)

Usa JSON.stringify() para salvar o novo array de volta como texto

Chama carregarTarefas() para atualizar a interface

Esse ciclo garante persistência local e sincronização visual.

🛠️ Tecnologias utilizadas
HTML5

CSS3

JavaScript Vanilla

localStorage para armazenamento

✨ Melhorias futuras
✅ Marcar tarefas como concluídas

🔍 Filtros por status (pendente/concluído)

📅 Ordenação por data ou prioridade

🔌 Integração com APIs externas como Firebase

📷 Preview
(Insira aqui uma imagem ou GIF da interface do projeto, se desejar)

📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar como quiser!