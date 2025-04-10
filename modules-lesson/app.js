const names = require('./names.js')
const sayHi = require('./3-modules.js')


//quando a função foi invocada no arquivo de origem ele é executada aqui
require('./mind-grenade')

sayHi(names.john)
sayHi(names.monteiro)
