// const validator = require('validator')
const chalk = require('chalk')
const { describe, demand } = require('yargs')
const yargs = require('yargs')
// const  getNotes = require('./notes.js')

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
    handler: function(argv) {                   //when it is going to execute
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)

    }
})

//create remove command
yargs.command({
    command: 'remove',             //command name 
    describe: 'remove the note',         //description about command
    handler: function() {                   //when it is going to execute
        console.log('Removing the Note!')
    }
})
//create list command
yargs.command({
    command: 'list',             //command name 
    describe: 'listing the note',         //description about command
    handler: function() {                   //when it is going to execute
        console.log('Listing the Note!')
    }
})
//create read command
yargs.command({
    command: 'read',             //command name 
    describe: 'read the note',         //description about command
    handler: function() {                   //when it is going to execute
        console.log('Reading the Note!')
    }
})


// console.log(yargs.argv) 
yargs.parse()
