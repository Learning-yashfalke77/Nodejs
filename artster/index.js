// To create default template of package.json 
// npm init
// ^ means greater than
// ~ means around 
// After creating package.json an automatic record is done in package.json

const figlet = require('figlet')
const colors = require('colors')

figlet('Hello World ', function (err, data) {
    if (err) {
        console.log('Something went wrong')
        console.dir(err)
        return
    }
    console.log(data.green)
})

// If uploading code do not uplod node module folder only give package.json

// If you do: [npm install] it will look at package.json and install its all dependencies