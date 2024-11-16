let nota = process.argv[2]

if (nota == 'add') {
    console.log('Nota agregada')
} else if (nota == 'remove') {
    console.log('Nota removida')
} else {
    console.log('Comandos disponibles: add , remove')
}