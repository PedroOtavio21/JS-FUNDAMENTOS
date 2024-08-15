// Teste de Velocidade
// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos 
// e exiba na tela uma mensagem dizendo qual dos dois é mais rápido 
// (ou que as velocidades são iguais se este for o caso)

const veiculoUm = prompt("Insira o nome do veículo 1:")
const velocidadeUm = parseFloat(prompt(`Insira a velocidade de ${veiculoUm}:`))
const veiculoDois = prompt("Insira o nome do veículo 2:")
const velocidadeDois = parseFloat(prompt(`Insira a velocidade de ${veiculoDois}:`))

if(velocidadeUm > velocidadeDois){
    alert(`${veiculoUm} é mais rápido que ${veiculoDois}!`)
} else if (velocidadeUm < velocidadeDois){
    alert(`${veiculoDois} é mais rápido que ${veiculoUm}`)
} else {
    alert("Ambos os veículos possuem a mesma velocidade!")
}