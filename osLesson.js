const os = require('os')

const osIn4 = {
    osName: os.type(),
    osVer: os.version(),
    freeMe: os.freemem(),
    toralMem: os.totalmem(),
    Uptime: os.uptime()
}
console.log(os.userInfo())
console.log(osIn4)