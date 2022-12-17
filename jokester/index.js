

// ----------------------------------------------- INSTALLING LOCALLY ---------------------------------------------------------------------
// to install jokes: npm install give-me-a-joke
//            colors: npm install colors

const jokes = require('give-me-a-joke')
const colors = require('colors')
console.dir(jokes)

jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});

// -------------------------------------------------- Install globally ------------------------------------------------------------------
// npm i -g cowsay
// To link global package to your dir : npm link cowsay
const cowsay = require('cowsay')

// Every package has package.json which contains metadata of package
// It also has dependencies

// Every node should have its package.json