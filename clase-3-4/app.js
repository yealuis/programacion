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
    handler: function() {
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
    handler: function() {
        console.log('This is your note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List of all notes',
    handler: function() {
        console.log('All notes are listed!')
    }
})

yargs.parse()