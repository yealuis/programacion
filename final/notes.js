let notas = []
let lista = document.querySelector('#listaNotas')

let addNotes = () => {
    const notaInput = document.querySelector('#notaInput')
    notas.push(notaInput.value)
    showNotes()
}

let showNotes = () => {
    lista.innerHTML = ""
    notas.forEach((nota, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
        ${nota}
        <button onclick="deleteNotes(${index})" class="delete">Eliminar Nota</button>
        `
        lista.appendChild(li)
        notaInput.value = ""
    });
}

let deleteNotes = (index) => {
    notas.splice(index, 1)
    showNotes()
}
