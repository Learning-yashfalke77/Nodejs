// Node js is runtime javascript 
// It doesnt have document and window object like browser it doesn't have browser stuffs
// Node REPL is like browswer javascript Console on windows prompt after typing node
// Running node js in a file
// Node [FILENAME]

// for (let index = 0; index < 5; index++) {
//     console.log('First nodejsexecution')
// }

// ---------- Node js has global object which contains inbuild function -------------------------------------------------------

//  -------------------------------------------------- Processs --------------------------------------------------------------------------
// the process object is a global that provides information about, and control over, the current Node.js process.
// console.log(process.version)  //version of nodejs
// console.log(process.release)
// console.log(process.cwd())  //Current working directory 
// console.log(process.argv)   
// //It returns an array with 1st index of nodejs executable path and second file path where we are writng code and rest will be arguments passeed to file while executing
// // OR Getting Argument from command line
// // EG... node Intro.js hello betta

// // greeting each arrgument paased to file 
// const args = process.argv.slice(2)
// for (const iterator of args) {
//     console.log(`Hiii ${iterator}`)
// }


// ------------------------------------------------ File Systems in nodejs ---------------------------------------------------------------
// All system file operations have synchronous and asynchronous forms 
// The synchronous version block the entire process until it is completed, halting all connections

// Importing the module
// const fs = require('fs')
// console.log(fs)

// fs.mkdir('Dogs', {recursive:true}, (err) => {
//     console.log('In process of making dir')
// })
// console.log('Dir completed successfully')

// fs.mkdirSync('Dogs', {recursive:true}, (err) => {
//     console.log('In process of making dir')
// })
// console.log('Dir completed successfully')

// const folderName = process.argv[2] || 'Project'

// try {
//     fs.mkdirSync(folderName)

//     // Creating file inside 
//     fs.writeFileSync(`${folderName}/index.html`, '')
//     fs.writeFileSync(`${folderName}/app.css`, '')
//     fs.writeFileSync(`${folderName}/app.js`, '')
// } catch (error) {
//     console.log('Something went wrongg')
//     console.log(error)
// }


//  ---------------------------------------------------------- Import moduleExport.js --------------------------------------------
// const math = require('./moduleExport')
// console.log(math)

// const {add, PI, square} = math
// console.log(add(2, 3))
// console.log(square(2))
// console.log(PI)

// ------------------------------------------------------------ Import shelter directory content ---------------------------------------------
const cats = require('./Shelter/index')
console.log(cats)