const chalk = require('chalk')
const { describe, demand } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//Create a add command 
yargs.command({
    command: 'add',             //command name 
    describe: 'Adding  a new note',         //description about command
    builder: {
        title: {                        //setting a option to the command
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {                         //setting another option to the command
            describe: 'Note body',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv) {                   //when it is going to execute
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',             //command name 
    describe: 'remove the note',         //description about command
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv) {                   //when it is going to execute
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',             //command name 
    describe: 'listing the note',         //description about command
    handler() {                   //when it is going to execute
        notes.listNotes()
    }
})
//create read command
yargs.command({
    command: 'read',             //command name 
    describe: 'Read the note',         //description about command
    builder:{
        title:{
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv) {                   //when it is going to execute
        notes.readNote(argv.title)
    }
})


// console.log(yargs.argv)
yargs.parse()
