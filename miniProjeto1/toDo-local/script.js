function carregarTarefas() {
    const lista = document.getElementById('listaTarefas')
    lista.innerHTML = ''
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li')
        li.textContent = tarefa
        const btn = document.createElement('button')
        btn.textContent = '🗑'
        btn.onclick = () => excluirTarefa(index)
        li.appendChild(btn)
        lista.appendChild(li)
    })
}

function adicionarTarefa() {
    const input = document.getElementById('tarefaInput')
    const texto = input.value.trim()
    if (texto === '') return
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.push(texto)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    input.value = ''
    carregarTarefas()
}

function excluirTarefa(index) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    tarefas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    carregarTarefas()
}

window.onload = carregarTarefas
