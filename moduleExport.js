const add = (x, y) => {
    return x + y
}

const PI = Math.PI

const square = x => {
    return x ** 2
}

// Using this in Inro.js
// module.exports.add = add
// module.exports.PI = PI
// module.exports.square = square

exports.add = add       //Shortcut way but dont create variable as exports
exports.PI = PI
exports.square = square