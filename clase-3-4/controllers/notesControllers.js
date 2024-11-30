const fs = require('fs') 

module.exports = {
    loadNotes: function() {
        try {
            let data = fs.readFileSync('notes.json', {encoding: 'utf-8'})
            let parsedData = JSON.parse(data)
            return parsedData   
        } catch (e) {
            return []
        }
    },
    saveNotes: function(notes) {
        let stringData = JSON.stringify(notes)
        fs.writeFileSync('notes.json', stringData)
    },
    createNote: function(title, body) {
        let notes = this.loadNotes()
        let findNote = notes.find(note => note.title == title)
        if (findNote.title == title) {
            console.log(`The note ${findNote.title} already exist`)
        } else {
            notes.push ({
                title: title,
                body: body
            })
            this.saveNotes(notes)
        }
    },
    removeNote: function(title) {
        let notes = this.loadNotes()
        let filteredNotes = notes.filter(note => note.title != title)
        this.saveNotes(filteredNotes)
    },
    readNote: function(title) {
        let notes = this.loadNotes()
        let findNote = notes.find(note => note.title == title)
        console.log(`Titulo: ${findNote.title}`)
        console.log(`Descripcion: : ${findNote.title}`)
    },
    listNotes: function() {
        let notes = this.loadNotes()
        notes.forEach(note => console.log(note.title));
    }
}