const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        console.log('Nota agregada!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Nota removida!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Nota')
    }
})

yargs.command({
    command: 'list',
    describe: 'List of all notes',
    handler: function() {
        console.log('Lista de todas las notas')
    }
})

yargs.parse()