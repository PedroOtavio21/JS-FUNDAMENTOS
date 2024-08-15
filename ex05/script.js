/*
Conversor de Medidas
Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual 
unidade de medida esse valor deve ser convertido. As opções são:

1. milímetro (mm)
2. centímetro (cm)
3. decímetro (dm)
4. decâmetro (dam)
5. hectômetro (hm)
6. quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário 
insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

let valor = parseFloat(prompt("Insira um valor inicial em metros"))

const opcao = prompt(
    "Insira uma opção desejada (A partir do número que a representa):" + 
    "\n1. milímetro (mm)" +
    "\n2. centímetro (cm)" +
    "\n3. decímetro (dm)" +
    "\n4. decâmetro (dam)" +
    "\n5. hectômetro (hm)" +
    "\n6. quilômetro (km)"
)

alert("Iniciando conversão.")
switch(opcao){
    case "1":
        valor *= 1000
        alert(`Novo valor convertido: ${valor}mm`)
        break
    case "2":
        valor *= 100
        alert(`Novo valor convertido: ${valor}cm`)
        break
    case "3":
        valor *= 10
        alert(`Novo valor convertido: ${valor}dm`)
        break
    case "4":
        valor /= 10
        alert(`Novo valor convertido: ${valor}dam`)
        break
    case "5":
        valor /= 100
        alert(`Novo valor convertido: ${valor}hm`)
        break
    case "6":
        valor /= 1000
        alert(`Novo valor convertido: ${valor}km`)
        break
    default:
        alert("Opção inserida inválida!")
}