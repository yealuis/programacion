//Se crea un array para guardar las notas
let notas = []
let lista = document.querySelector('#listaNotas')

//Funcion para agregar las notas al array
let addNotes = () => {
    const notaInput = document.querySelector('#notaInput')
    notas.push(notaInput.value)
    showNotes()
    notaInput.value = ""
}

//Funcion para mostrar las notas en la pagina
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

//Funcion para eliminar una nota
let deleteNotes = (index) => {
    notas.splice(index, 1)
    showNotes()
}

//Funcion para editar una nota
let editNotes = (index) => {
    const notaInput = document.querySelector('#notaInput')
    let note = notas[index]
    notaInput.value = note
    deleteNotes(index)
}