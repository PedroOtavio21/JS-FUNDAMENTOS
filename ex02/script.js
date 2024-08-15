// Calculadora de 4 Operações
// Escreve um programa em javascript que permita inserir dois valores numéricos e então 
// calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
// Após calcular os resultados o programa deve exibi-los na tela.

alert("Bem-vindo à Calculadora de Operações Básicas!")
const valorUm = parseFloat(prompt("Insira um primeiro valor:"))
const valorDois = parseFloat(prompt("Insira um segundo valor:"))

const soma = valorUm + valorDois
const subtracao = valorUm - valorDois
const multiplicacao = valorUm * valorDois
const divisao = valorUm / valorDois

alert(`Resultado das quatro operações básicas, utilizadas em ${valorUm} e ${valorDois}:
    soma = ${soma} , subtração = ${subtracao} , multiplicação = ${multiplicacao} e divisão = ${divisao}`)