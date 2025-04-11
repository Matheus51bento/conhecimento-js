import { Tarefa, Lista } from './models.js'
import readline from 'readline-sync'

const arrayListas = []

function validListaIndex(index) {
    if (index < 0 || index >= arrayListas.length) {
        console.log("Lista não encontrada!")
        return false
    }
    return true
}

function validTarefaIndex(index, listaIndex) {
    if (index < 0 || index >= arrayListas[listaIndex].tarefas.length) {
        console.log("Tarefa não encontrada!")
        return false
    }
    return true
}

while (true) {
    console.log("\nEscolha uma opção:")
    console.log("1. Criar nova lista")
    console.log("2. Adicionar tarefa")
    console.log("3. Marcar tarefa como pronta")
    console.log("4. Listar tarefas")
    console.log("5. Listar tarefas prontas")
    console.log("6. Listar tarefas pendentes")
    console.log("7. Sair")
    const opcao = parseInt(readline.question("Opção: "))

    switch (opcao) {
        case 1:
            const nomeLista = readline.question("Digite o nome da lista: ")
            const novaLista = new Lista(nomeLista)
            arrayListas.push(novaLista)
            console.log(`Lista "${nomeLista}" criada com sucesso!`)
            break

        case 2:
            var listaIndex = parseInt(readline.question("Digite o índice da lista: "))
            if (!validListaIndex(listaIndex)) break
            const nomeTarefa = readline.question("Digite o nome da tarefa: ")
            const novaTarefa = new Tarefa(nomeTarefa)
            arrayListas[listaIndex].adicionarTarefa(novaTarefa)
            console.log(`Tarefa "${nomeTarefa}" adicionada à lista "${arrayListas[listaIndex].nome}"!`)
            break

        case 3:
            var listaIndex = parseInt(readline.question("Digite o índice da lista: "))
            if (!validListaIndex(listaIndex)) break
            var tarefaIndex = parseInt(readline.question("Digite o índice da tarefa: "))
            if (!validTarefaIndex(tarefaIndex, listaIndex)) break
            arrayListas[listaIndex].marcarTarefaPronta(tarefaIndex)
            console.log(`Tarefa "${arrayListas[listaIndex].tarefas[tarefaIndex].nome}" marcada como pronta!`)
            break

        case 4:
            arrayListas.forEach((lista, idx) => {
                console.log(`\nLista ${idx}: ${lista.nome}`)
                const tarefas = lista.listarTarefas()
                tarefas.forEach(t => {
                    console.log(`  ${t.index}. ${t.nome} - ${t.pronta ? "✅" : "❌"}`)
                })
            })
            break

        case 5:
            arrayListas.forEach((lista, idx) => {
                console.log(`\nLista ${idx}: ${lista.nome}`)
                const prontas = lista.listarTarefasProntas()
                prontas.forEach((t, i) => console.log(`  ${i}. ${t.nome} - ✅`))
            })
            break

        case 6:
            arrayListas.forEach((lista, idx) => {
                console.log(`\nLista ${idx}: ${lista.nome}`)
                const pendentes = lista.listarTarefasPendentes()
                pendentes.forEach((t, i) => console.log(`  ${i}. ${t.nome} - ❌`))
            })
            break

        case 7:
            console.log("Saindo...")
            process.exit(0)

        default:
            console.log("Opção inválida!")
    }
}
