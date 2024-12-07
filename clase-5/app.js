let body = document.querySelector('body')

let addUser = () => {
    const input = document.querySelector('#name')
    const password = document.querySelector('#password')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.innerText = input.value
    p2.innerText = password.value
    body.appendChild(p1)
    body.appendChild(p2)
    input.value = ""
    password.value = ""
} 

/*let parrafo = document.createElement('p')
parrafo.innerText = password
body.appendChild(parrafo)*/