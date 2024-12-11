let notas = []
let lista = document.querySelector('#listaNotas')

let addNotes = () => {
    const notaInput = document.querySelector('#notaInput')
    notas.push(notaInput.value)
    showNotes()
    notaInput.value = ""
}

let showNotes = () => {
    lista.innerHTML = ""
    notas.forEach((nota, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
        ${nota}
        <div>
            <button onclick="editNotes(${index})" class="liButton" id="edit">EDITAR</button>
            <button onclick="deleteNotes(${index})" class="liButton" id="delete">ELIMINAR</button>
        </div>
        `
        lista.appendChild(li)
    });
    notaInput.focus()
}

let deleteNotes = (index) => {
    notas.splice(index, 1)
    showNotes()
}

let editNotes = (index) => {
    const notaInput = document.querySelector('#notaInput')
    let note = notas[index]
    notaInput.value = note
    deleteNotes(index)
}