let amigos = ["Carlos", "Joana", "Marcos", "Barbara", "Luana"]

console.log(amigos[3])

for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}
console.log("adicionando na lista")
amigos.push("Fernanda")
console.log(amigos)

console.log("remove o primeiro da lista")
amigos.pop()
console.log(amigos)

console.log("adiciona no inicio da lista")
amigos.pop()
console.log(amigos)
