// const validator = require('validator')
const chalk = require('chalk')
const  getNotes = require('./notes.js')

// const Notes = getNotes()

// console.log(Notes)

// console.log(chalk.red.inverse.bold("Error!"))

// // console.log(validator.isURL(''))

// console.log(process.argv[2])

const command = process.argv[2]

console.log(process.argv)

if(command === 'add') {
    console.log("Adding Note")
}
else if(command === 'remove'){
    console.log("Removing Note")
}