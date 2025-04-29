//jogo pedra, papel e tesoura
let placarJogador = 0
let placarPC = 0

let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

for(let i = 0; i<rodadas; i++){

const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
//solicita que o usuário informe qual ele quer

const escolhaPC = ["pedra", "papel", "tesoura"]
[Math.floor(Math.random()* 3)]

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)

    if(escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
        alert("Você venceu")
    } else {
        alert("Você perdeu")
        placarPC++
    }
    console.log("Placar Jogador: ", placarJogador)
    confirm.log("Placar computador: ", placarPC)
}
    alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)
