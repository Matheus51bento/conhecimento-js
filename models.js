export class Tarefa {
    nome = ""
    pronta = false

    constructor(nome) {
        this.nome = nome
    }

    marcarPronta() {
        this.pronta = true
    }
}

export class Lista {
    tarefas = []
    nome = ""

    constructor(nome) {
        this.nome = nome
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa)
    }

    marcarTarefaPronta(index) {
        this.tarefas[index].marcarPronta()
    }

    listarTarefas() {
        return this.tarefas.map((tarefa, index) => ({
            index,
            nome: tarefa.nome,
            pronta: tarefa.pronta
        }))
    }

    listarTarefasProntas() {
        return this.tarefas.filter(tarefa => tarefa.pronta)
    }

    listarTarefasPendentes() {
        return this.tarefas.filter(tarefa => !tarefa.pronta)
    }

}