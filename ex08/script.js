/*
Controle Financeiro
Escreva um programa em javascript que comece perguntando pela quantidade inicial 
de dinheiro disponível e então mostre na tela essa quantidade juntamente com as 
opções de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade 
a ser adicionada, somar esse valor com a quantidade inicial e então mostrar 
novamente o menu com a quantidade de dinheiro e as opções. 
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
A opção de sair deve encerrar o programa.
*/

let saldo = parseFloat(prompt("Olá, Programador! Insira a quantidade de saldo que possui:"))

let opcao = ""
do {
    opcao = prompt(`Saldo disponível = R$${saldo}
        Insira uma das opções abaixo(1 a 3):
        1. Adicionar saldo
        2. Remover saldo
        3. Sair`
    )

    switch(opcao){
        case "1":
            const adiciona = parseFloat(prompt("Insira a quantidade que deseja adicionar:"))
            saldo += adiciona
            alert(`Você adicionou R$${adiciona} com sucesso!`)
            break
        case "2":
            if(saldo <= 0){
                alert("Não será possível remover o saldo da conta!")
                break
            } else {
                const remove = parseFloat(prompt("Insira a quantidade que deseja remover:"))
                if(saldo - remove <= 0){
                    alert("Saldo negativo será negativo ao remover renda! Tente novamente.")
                    break
                }
                saldo -= remove
                alert(`Você removeu R$${remove} com sucesso!`)
                break
            }
        case "3":
            alert("Saindo da aplicação.")
            break
        default:
            alert("Opção inserida inválida!")
    }
} while(opcao !== "3")