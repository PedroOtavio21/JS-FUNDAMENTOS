/* 
Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, 
depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se 
ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

1. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, 
o dano causado será igual a diferença entre o ataque e a defesa.
2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, 
o dano causado será igual a metade da diferença entre o ataque e a defesa.
3. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de 
vida do personagem defensor e exibir na tela a quantidade de dano e as informações 
atualizadas de ambos os personagens.
*/

const nomeAtacante = prompt("Insira o nome do personagem atacante:")
const poderAtacante = parseFloat(prompt(`Insira o poder de ataque de ${nomeAtacante}`))

const nomeDefensor = prompt("Insira o nome do personagem defensor:")
let vidaDefensor = parseFloat(prompt(`Insira os pontos de vida de ${nomeDefensor}`))
const poderDefensor = parseFloat(prompt(`Insira o poder de defesa de ${nomeDefensor}`))
const possuiEscudo = confirm(`O guerreiro ${nomeDefensor} possui escudo?`)

let pontosDeDano = 0
if(poderAtacante > poderDefensor && possuiEscudo === false){
    pontosDeDano = poderAtacante - poderDefensor
} else if (poderAtacante > poderDefensor && possuiEscudo === true){
    pontosDeDano = (poderAtacante - poderDefensor) / 2.0
} else {
    pontosDeDano = 0
}

vidaDefensor = vidaDefensor - pontosDeDano

alert(`Resultado do combate entre ${nomeAtacante} e ${nomeDefensor}`)
if(vidaDefensor !== 0){
    alert(`Poder de Ataque = ${poderAtacante};
        Poder de Defesa = ${poderDefensor} - Escudo = ${possuiEscudo};
        Dano causado = ${pontosDeDano} - Vida de ${nomeDefensor} = ${vidaDefensor}`)
} else {
    alert(`O guerreiro ${nomeDefensor} acabou morrendo!
        Poder de Defesa = ${poderDefensor} - Escudo = ${possuiEscudo};
        Dano causado = ${pontosDeDano} - Vida de ${nomeDefensor} = ${vidaDefensor}`)
}