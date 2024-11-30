const yargs = require('yargs')
const notes = require('./controllers/notesControllers')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.createNote(argv.title, argv.body)
        console.log('note added')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
        console.log('Note removed!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv) {
        console.log('This is your note!')
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List of all notes',
    handler: function() {
        notes.listNotes()
        console.log('All notes are listed!')
    }
})

yargs.parse()