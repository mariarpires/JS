
let idade = prompt("Qual sua idade?")
console.log("Sua idade é ", idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}
console.log("----------------------------")

let numero = prompt("Escolha um número:")
let resultado = numero %2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é ímpar")
}