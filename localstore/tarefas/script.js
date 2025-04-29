let tarefas = JSON.parse(localStorage.getItem("tarefas") 

const entradaTarefa = document.getElementById
("entradaTarefa")
const botaoAdicionar = document.getElementById
("botaoAdicionar")
const  listarTarefas = document.getElementById
("listarTarefas")

//Exibir Tarefas
taretas. torEach((tareta, indice) => {
    const itemLista = document. createElement ("li")
    const caixaMarcacao = document.createElement
    ("input")
    caixaMarcacao.type = "checkbox"
    caixaMarcacao. checked = tarefa. feita
    caixaMarcacao.onchange = () => {
    tarefas[indice]. feita = !tarefas[indice].feita
    salvarTarefas()
    exibirTarefas()
}
const textoTarefa = document. createElement ("span")
textoTarefa.textContent = tarefa. texto
if(tarefa.feita){
    textoTarefa.classList.add("concluida")
})

//Adicionar tarefas
botaoAdicionar. addEventListener("click", () => {
    const texto = entradaTarefa.value
    if(texto != "") {
        tarefas.push({texto: texto, feita: false})
        salvarTarefas ()
        exibirTarefas ()
    }
})
exibirTarefas ()