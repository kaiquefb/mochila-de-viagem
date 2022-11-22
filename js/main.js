const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {    
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroDoItem = document.createElement('strong')
    numeroDoItem.innerHTML = quantidade

    novoItem.appendChild(numeroDoItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

}