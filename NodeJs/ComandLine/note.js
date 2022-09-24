const fs = require('fs');
const loadNote = (name) => {
    try {
        const dataBuffer = fs.readFileSync('./note.json')
        const data = dataBuffer.toString()
        return JSON.parse(data);
    } catch (e) {
        return []
    }

}
const addNote = (name) => {
    const load = loadNote(name)
    const duplicateData = load.filter((note) => note.name == name)
    if (duplicateData.length == 0) {
        load.push({ name: name })
    } else {
        console.log('Record Already Exist...')
    }
    saveNote(load)
}
const saveNote = (data) => {
    const jsonData = JSON.stringify(data)
    fs.writeFileSync('./note.json', jsonData)
    // console.log(loadNote())
}
const removeNote = (name) => {
    const load = loadNote()
    const keepNote = load.filter((note) => note.name != name);

    if (load.length > keepNote.length) {
        saveNote(keepNote)
    } else {
        console.log('No data Found....')
    }

}
const updateNote = (data) => {
    const load = loadNote()
    const keepNote = load.filter((note) => note.name != data.name);

    if (load.length > keepNote.length) {

        load.filter((note) => {
            if (note.name === data.name) {

                const duplicateData = load.filter((note) => note.name == data.newname)
                if (duplicateData.length == 0) {
                    note.name = data.newname

                } else {
                    console.log('Record Already Exist...')
                }

            }

        })
        saveNote(load)
    } else {
        console.log('No data Found....')
    }




}

module.exports = {
    addNote, removeNote, updateNote
}

