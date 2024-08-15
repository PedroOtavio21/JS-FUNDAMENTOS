// Escreva um programa em javascript que permita salvar informações de um recruta. 
// As informações a serem salvas são:
// o primeiro nome
// o sobrenome
// o campo de estudo
// o ano de nascimento
// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua 
// idade (apenas baseada no ano de nascimento).

const primeiroNome = prompt("Insira aqui o seu primeiro nome:")
const segundoNome = prompt("Insira agora o seu segundo nome:")
const stack = prompt("Qual seria o seu campo de estudo? (Stack)")
const anoNascimento = parseFloat(prompt("Qual é o seu ano de nascimento?"))

alert(`Olá Programador! Seu nome é ${primeiroNome + " " + segundoNome}.
    Possui como campo de estudo ${stack}, tendo como idade ${2024 - anoNascimento}!`
)