const yargs = require("yargs");
const note = require('./note')
yargs.command({
    command: 'add',
    describe: 'Add Note',
    builder: {
        name: {
            describe: 'Enter your Name',
            type: 'string',
            demandOption: true
        }
    },
    handler(args) {
        // console.log(note);
        note.addNote(args.name);
    }
})
yargs.command({
    command: 'remove',
    describe: "remove Note",
    builder: {
        name: {
            type: 'string',
            demandOption: true
        }
    },
    handler(args) {
        note.removeNote(args.name)
    }
})
yargs.command({
    command: 'update',
    describe: 'update Note...',
    builder: {
        name: {
            type: 'string',
            demandOption: true,

        },
        newname: {
            type: 'string',
            demandOption: true,

        }
    },
    handler(args){
       note.updateNote(args)
    }
})
yargs.parse()