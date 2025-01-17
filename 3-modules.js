const names = require('./4-names');
const sayHi = require('./5-utils');
const altFlavour = require('./6-altflavour')

console.log(altFlavour)
sayHi(names.name1)
 

const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user)

// method retunr the system uptime in seconds

console.log(`The system uptime is: ${os.uptime()} seconds`)
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)

const path = require('path')

console.log(path.sep)