/*
Robô da Tabuada
Escreva um programa em javascript que seja capaz de calcular a tabuada de um 
determinado número (de 1 a 20). 
O programa deve começar pedindo o número a ser usado nos cálculos e então salvar 
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma 
variável do tipo string. 
Depois o programa deve exibir esses resultados e finalizar.
*/

alert("Olá, programador!")
let numero = parseFloat(prompt("Insira um número para descobrir qual será sua tabuada de 1 à 20!"))

let tabuada = ""
for(let i = 0; i < 20; i++){
    tabuada += " - " + (i + 1) + " x " + numero + " = " + ((i + 1) * numero) + "\n"
}

alert(`Segue a Tabuada de ${numero} logo abaixo: \n\n${tabuada}`)