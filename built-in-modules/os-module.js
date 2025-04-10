const os = require('os')

const user = os.userInfo()
console.log(user)

//return the system uptime

const systemUp = os.uptime()
console.log(`The system uptime is ${systemUp} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOs)