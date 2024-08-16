/*
Procurando Palíndromos
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. 
Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. 
O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem 
dizendo se aquela palavra é ou não um palíndromo. 
Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e 
da direita para esquerda.
*/

const palavra = prompt("Insira uma palavra qualquer para verificação:")

let palindromo = ""
for(let i = palavra.length - 1; i >= 0; i--){
    palindromo += palavra[i]
}

if(palavra == palindromo){
    alert(`A palava que você inseriu anteriormente é um palíndromo!
    Veja: '${palavra}' e '${palindromo}'.`)
} else {
    alert(`A palavra que você inseriu anteriormente não forma um palíndromo
    Veja: '${palavra}' e '${palindromo}'.`)
}