class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new pesso("Maria", 17)
aluno1.apresentar();

class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.abo = ano
    }
    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const meuCarro = new carro("Hyundai", "HB20", 2023)
meuCarro.exibirInfo()

class aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }

    verificarAprovacao(){
        if(this.nota >= 6) {
            console.log(`${this.nome} foi aprovado`)
        } else {
            console.log(`${this.nome} foi reprovado`)
        }
    }
}
const aluno = new aluno("Ana", 7)
aluno.verificarAprovacao()
const aluno = new aluno("Alice", 4)
aluno.verificarAprovacao()