/* 
Visitando Novas Cidades
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele 
já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o 
armazene em uma variável, e então continue perguntando se o turista visitou alguma outra 
cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, 
quantas e quais cidades ele visitou.
*/

const nomeTurista = prompt("Olá, turista! Qual o seu nome?")
let visitou = confirm("Você já chegou a visitar alguma cidade?")

let cidades = ""
let qntdCidades = 0
while(visitou){
    const cidade = prompt("Insira o nome da cidade que você visitou:")
    cidades += " - " + cidade + "\n"
    qntdCidades++
    visitou = confirm("Você chegou a visitar alguma outra cidade?")
}

if(cidades !== ""){
    alert(`Olá ${nomeTurista}, você visitou um total de ${qntdCidades}, sendo elas: \n${cidades}`)
} else {
    alert(`Olá ${nomeTurista}, você visitou um total de ${qntdCidades}, volte da próxima vez!`)
}