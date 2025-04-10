//CommonJS - every file is a module
//modules - encapsulated code (only share minimum)

const sayHi = (name) => {
    console.log(`${name}`)
}

module.exports = sayHi