
let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}

function mudarCor(){
    texto.style.color = "purple"
    document.body.style.backgroundColor = "pink"
}

function trocarFundo(){
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "red"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.src ="choraoo.jpg"
}

let mensagem = document.getElementById("mensagem");

function outroTexto() {
    mensagem.innerText = "Texto Alterado";
}

function voltaTexto() {
    mensagem.innerText = "Passe o mouse aqui";
}

function aparece(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == 'none') {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio(){
    let tamanho = document.getElementById("tamanho")
    
}